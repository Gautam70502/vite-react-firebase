import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class CountryService extends BaseService<Country> {
  constructor(
    @InjectRepository(Country)
    public countryRepository: Repository<Country>,
  ) {
    super(countryRepository, 'Country');
  }
}
