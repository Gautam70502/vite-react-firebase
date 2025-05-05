import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chapter } from './entities/chapter.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class ChapterService extends BaseService<Chapter> {
  constructor(
    @InjectRepository(Chapter)
    public chapterRepository: Repository<Chapter>,
  ) {
    super(chapterRepository, 'chapter');
  }

  async findAllUser(
    options: Record<string, any>,
    relations?: string[],
    // select?: string[],
  ) {
    try {
      const result = await this.chapterRepository.find({
        relations: relations,
      });

      if (!result || result.length === 0) {
        throw new NotFoundException('Chapters not found');
      }

      return {
        data: result.map((chapter) => ({
          id: chapter.id,
          name: chapter.name,
          users: chapter.chapterUsers.map((cu) => ({
            id: cu.user.id,
            firstName: cu.user.firstName,
            lastName: cu.user.lastName,
            email: cu.user.email,
          })),
        })),
      };
    } catch (error) {
      console.error('Error in findAll:', error);
      throw error;
    }
  }
}
