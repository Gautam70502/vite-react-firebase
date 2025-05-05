import { Module } from '@nestjs/common';
import { OneToOneService } from './one-to-one.service';
import { OneToOneController } from './one-to-one.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OneToOnes } from './entities/one-to-one.entity';
import { NotificationModule } from 'src/notification/notification.module';
import { UserfcmtokenModule } from 'src/userfcmtoken/userfcmtoken.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OneToOnes]),
    NotificationModule,
    UserfcmtokenModule,
  ],
  controllers: [OneToOneController],
  providers: [OneToOneService],
})
export class OneToOneModule {}
