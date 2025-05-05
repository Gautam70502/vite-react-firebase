import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { UserfcmtokenModule } from 'src/userfcmtoken/userfcmtoken.module';
import { NotificationModule } from 'src/notification/notification.module';
import { Members } from './entities/member.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Members]),
    UserfcmtokenModule,
    NotificationModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
