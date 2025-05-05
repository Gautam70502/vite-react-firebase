import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { Tyfcb } from './entities/tyfcb.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TyfcbService extends BaseService<Tyfcb> {
  constructor(
    @InjectRepository(Tyfcb)
    public tyfcbRepository: Repository<Tyfcb>,
  ) {
    super(tyfcbRepository, 'tyfcb');
  }
}
