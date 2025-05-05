import { Module } from '@nestjs/common';
import { TyfcbService } from './tyfcb.service';
import { TyfcbController } from './tyfcb.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tyfcb } from './entities/tyfcb.entity';
import { NotificationModule } from 'src/notification/notification.module';
import { UserfcmtokenModule } from 'src/userfcmtoken/userfcmtoken.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tyfcb]),
    NotificationModule,
    UserfcmtokenModule,
  ],
  controllers: [TyfcbController],
  providers: [TyfcbService],
})
export class TyfcbModule {}
