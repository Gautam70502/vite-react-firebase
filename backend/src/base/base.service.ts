import {
  DeepPartial,
  FindManyOptions,
  FindOptionsRelations,
  FindOptionsSelect,
  FindOptionsWhere,
  Repository,
  SelectQueryBuilder,
} from 'typeorm';
import { BaseEntity } from './entity/base.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import e, { Request } from 'express';
import { PaginationOptions } from './types/base.types';
import { database } from 'firebase-admin';

export class BaseService<Entity extends BaseEntity> {
  constructor(
    private repository: Repository<Entity>,
    private name: string,
  ) {}

  async create(createDto: DeepPartial<Entity>) {
    try {
      const IsEntityExist = await this.repository.findOneBy(
        createDto as FindOptionsWhere<Entity>,
      );

      if (IsEntityExist) {
        throw new BadRequestException(`${this.name} already exist`);
      }

      return await this.repository.save(createDto);
    } catch (error) {
      throw new BadRequestException(
        error.message || `Failed to create ${this.name}`,
      );
    }
  }

  async findAll(
    options: Record<string, any>,
    relations?: string[],
    select?: string[],
  ) {
    try {
      const page = options?.page ? +options.page : 1;
      const limit = options?.limit ? +options.limit : 10;
      const filters = { ...options };

      delete filters.page;
      delete filters.limit;

      const entityAlias = this.repository.metadata.name.toLowerCase(); // Dynamic alias
      const qb: SelectQueryBuilder<Entity> =
        this.repository.createQueryBuilder(entityAlias);
      // .orderBy(`${entityAlias}.createdAt`, 'ASC');

      const baseSelect: string[] = [];
      const relationSelect: { relation: string; field: string }[] = [];
      const joinedRelations = new Set<string>();

      // Parse select fields
      if (select && select.length > 0) {
        select.forEach((field) => {
          if (field.includes('.')) {
            const [relation, relField] = field.split('.');
            relationSelect.push({ relation, field: relField });

            if (!joinedRelations.has(relation)) {
              qb.leftJoin(`${entityAlias}.${relation}`, relation); // Only join, not select all
              joinedRelations.add(relation);
            }
          } else {
            baseSelect.push(`${entityAlias}.${field}`);
          }
        });

        qb.select(baseSelect);
        relationSelect.forEach(({ relation, field }) => {
          qb.addSelect(`${relation}.${field}`);
        });
      } else {
        qb.select(`${entityAlias}`);
      }

      // Apply filters
      Object.keys(filters).forEach((key) => {
        if (key.includes('.')) {
          const [relation, field] = key.split('.');
          qb.andWhere(`${relation}.${field} = :${key}`, {
            [key]: filters[key],
          });
        } else if (Array.isArray(filters[key])) {
          qb.andWhere(`${entityAlias}.${key} IN (:...${key})`, {
            [key]: filters[key],
          });
        } else if (key !== 'from' && key !== 'to') {
          qb.andWhere(`${entityAlias}.${key} = :${key}`, {
            [key]: filters[key],
          });
        }
      });

      const [data, total] = await qb
        .skip((page - 1) * limit)
        .take(limit)
        .getManyAndCount();

      if (!data || data.length === 0) {
        throw new BadRequestException(`${this.name} not found`);
      }

      return {
        data,
        meta: {
          totalResults: total,
          currentPage: page,
          totalPages: Math.ceil(total / limit),
          perPage: limit,
        },
      };
    } catch (error) {
      throw new BadRequestException(
        error.message || `Failed to fetch ${this.name} list.`,
      );
    }
  }

  async findOne(findDto: FindOptionsWhere<Entity>) {
    try {
      const res = await this.repository.findOneBy(findDto);

      if (!res) {
        throw new BadRequestException(`${this.name} not found`);
      }
      return res;
    } catch (error) {
      throw new BadRequestException(
        error.message || `Failed to fetch ${this.name}`,
      );
    }
  }

  async update(id: string, updateDto: DeepPartial<Entity>) {
    try {
      const findEntityExist = await this.findOne({
        id,
      } as FindOptionsWhere<Entity>);

      if (!findEntityExist) {
        throw new BadRequestException(`${this.name} not found`);
      }

      const updateDetails = await this.repository.update(
        id,
        updateDto as QueryDeepPartialEntity<Entity>,
      );

      if (updateDetails.affected == 0) {
        return 'nothing changed';
      }

      return this.findOne({ id } as FindOptionsWhere<Entity>);
    } catch (error) {
      throw new BadRequestException(
        error.message || `Failed to update ${this.name}`,
      );
    }
  }

  async remove(id: string, deleteDto: DeepPartial<Entity>) {
    try {
      const res = await this.update(id, deleteDto);
      await this.repository.softDelete(id);
      return res;
    } catch (error) {
      throw new BadRequestException(
        error.message || `Failed to delete ${this.name}`,
      );
    }
  }
}
