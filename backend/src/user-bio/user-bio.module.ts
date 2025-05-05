import { Module } from '@nestjs/common';
import { UserBioService } from './user-bio.service';
import { UserBioController } from './user-bio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mybio } from './entities/user-bio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mybio])],
  controllers: [UserBioController],
  providers: [UserBioService],
  exports: [UserBioService],
})
export class UserBioModule {}
