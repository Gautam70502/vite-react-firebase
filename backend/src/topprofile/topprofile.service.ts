import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { TopProfile } from './entities/topprofile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TopprofileService extends BaseService<TopProfile> {
  constructor(
    @InjectRepository(TopProfile)
    public topProfileRepository: Repository<TopProfile>,
  ) {
    super(topProfileRepository, 'TopProfile');
  }
}
