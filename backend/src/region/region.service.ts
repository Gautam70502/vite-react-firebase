import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { Region } from './entities/region.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RegionService extends BaseService<Region> {
  constructor(
    @InjectRepository(Region)
    public regionRepository: Repository<Region>,
  ) {
    super(regionRepository, 'Region');
  }
}
