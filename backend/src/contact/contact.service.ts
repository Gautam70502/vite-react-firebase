import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contacts } from './entity/contact.entity';
import { BaseService } from 'src/base/base.service';

export class ContactService extends BaseService<Contacts> {
  constructor(
    @InjectRepository(Contacts)
    private readonly userContactsRepository: Repository<Contacts>,
  ) {
    super(userContactsRepository, 'contact');
  }
}
