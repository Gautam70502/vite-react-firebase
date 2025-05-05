import { Module } from '@nestjs/common';
import { TopprofileService } from './topprofile.service';
import { TopprofileController } from './topprofile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopProfile } from './entities/topprofile.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([TopProfile]), UsersModule],
  controllers: [TopprofileController],
  providers: [TopprofileService],
  exports: [TopprofileService],
})
export class TopprofileModule {}
