import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entity/address.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/base/base.service';

export class AddressService extends BaseService<Address> {
  constructor(
    @InjectRepository(Address)
    public userAddressRepository: Repository<Address>,
  ) {
    super(userAddressRepository, 'address');
  }
}
