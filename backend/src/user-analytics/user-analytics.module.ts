import { Module } from '@nestjs/common';
import { UserAnalyticsService } from './user-analytics.service';
import { UserAnalyticsController } from './user-analytics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAnalytics } from './entities/user-analytic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAnalytics])],
  controllers: [UserAnalyticsController],
  providers: [UserAnalyticsService],
})
export class UserAnalyticsModule {}
