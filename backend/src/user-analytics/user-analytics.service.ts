import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAnalytics } from './entities/user-analytic.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class UserAnalyticsService extends BaseService<UserAnalytics> {
  constructor(
    @InjectRepository(UserAnalytics)
    public userAnalyticRepository: Repository<UserAnalytics>,
  ) {
    super(userAnalyticRepository, 'userAnalytics');
  }
}
