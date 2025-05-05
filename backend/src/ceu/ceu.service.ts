import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { Ceu } from './entities/ceu.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CeuService extends BaseService<Ceu> {
  constructor(
    @InjectRepository(Ceu)
    public ceuRepository: Repository<Ceu>,
  ) {
    super(ceuRepository, 'Ceu');
  }
}
