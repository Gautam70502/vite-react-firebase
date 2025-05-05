import { Injectable } from '@nestjs/common';
import { OneToOnes } from './entities/one-to-one.entity';
import { BaseService } from 'src/base/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OneToOneService extends BaseService<OneToOnes> {
  constructor(
    @InjectRepository(OneToOnes)
    public oneToOneRepository: Repository<OneToOnes>,
  ) {
    super(oneToOneRepository, 'OneToOnes');
  }
}
