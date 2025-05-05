import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { Mybio } from './entities/user-bio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserBioService extends BaseService<Mybio> {
  constructor(
    @InjectRepository(Mybio)
    public userBioRepository: Repository<Mybio>,
  ) {
    super(userBioRepository, 'UserBio');
  }
}
