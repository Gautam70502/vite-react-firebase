import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { GainedBio } from './entities/gainedbio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GainedbioService extends BaseService<GainedBio> {
  constructor(
    @InjectRepository(GainedBio)
    public gainedBioRepostary: Repository<GainedBio>,
  ) {
    super(gainedBioRepostary, 'gainedbio');
  }
}
