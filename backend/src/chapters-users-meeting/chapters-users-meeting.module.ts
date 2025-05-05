import { Module } from '@nestjs/common';
import { ChaptersUsersMeetingService } from './chapters-users-meeting.service';
import { ChaptersUsersMeetingController } from './chapters-users-meeting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChaptersUsersMeeting } from './entities/chapters-users-meeting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChaptersUsersMeeting])],
  controllers: [ChaptersUsersMeetingController],
  providers: [ChaptersUsersMeetingService],
})
export class ChaptersUsersMeetingModule {}
