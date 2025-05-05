import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { City } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CityService extends BaseService<City> {
  constructor(
    @InjectRepository(City)
    public cityRepository: Repository<City>,
  ) {
    super(cityRepository, 'City');
  }
}
