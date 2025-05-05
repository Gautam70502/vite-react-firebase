import { Module } from '@nestjs/common';
import { ReferralGivenService } from './referralgiven.service';
import { ReferralGivenController } from './referralgiven.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReferralGiven } from './entities/referralgiven.entity';
import { NotificationModule } from 'src/notification/notification.module';
import { UserfcmtokenModule } from 'src/userfcmtoken/userfcmtoken.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReferralGiven]),
    NotificationModule,
    UserfcmtokenModule,
  ],
  controllers: [ReferralGivenController],
  providers: [ReferralGivenService],
})
export class ReferralGivenModule {}
