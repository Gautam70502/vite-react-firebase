import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ReferralGiven } from './entities/referralgiven.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReferralGivenService extends BaseService<ReferralGiven> {
  constructor(
    @InjectRepository(ReferralGiven)
    public ReferralRepository: Repository<ReferralGiven>,
  ) {
    super(ReferralRepository, 'ReferralGiven');
  }
}
