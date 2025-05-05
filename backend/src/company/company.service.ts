import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entity/company.entity';
import { BaseService } from 'src/base/base.service';

export class CompanyService extends BaseService<Company> {
  constructor(
    @InjectRepository(Company)
    private readonly usersCompanyRepository: Repository<Company>,
  ) {
    super(usersCompanyRepository, 'company');
  }
}
