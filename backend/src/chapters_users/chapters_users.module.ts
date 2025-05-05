import { Module } from '@nestjs/common';
import { ChaptersUsersService } from './chapters_users.service';
import { ChaptersUsersController } from './chapters_users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChapterUsers } from './entities/chapters_users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChapterUsers])],
  controllers: [ChaptersUsersController],
  providers: [ChaptersUsersService],
})
export class ChaptersUsersModule {}
