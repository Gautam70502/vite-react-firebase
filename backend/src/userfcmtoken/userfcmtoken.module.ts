import { Module } from '@nestjs/common';
import { UserfcmtokenService } from './userfcmtoken.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFcmToken } from './entities/userFcmToken.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserFcmToken])],
  providers: [UserfcmtokenService],
  exports: [UserfcmtokenService],
})
export class UserfcmtokenModule {}
