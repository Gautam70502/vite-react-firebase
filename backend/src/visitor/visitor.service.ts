import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { Visitor } from './entities/visitor.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VisitorService extends BaseService<Visitor> {
  constructor(
    @InjectRepository(Visitor)
    public visitorRepository: Repository<Visitor>,
  ) {
    super(visitorRepository, 'Visitor');
  }
}
