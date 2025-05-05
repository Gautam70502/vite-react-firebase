import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ChaptersUsersMeeting } from './entities/chapters-users-meeting.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ChaptersUsersMeetingService extends BaseService<ChaptersUsersMeeting> {
  constructor(
    @InjectRepository(ChaptersUsersMeeting)
    public ChaptersUsersMeetingRepository: Repository<ChaptersUsersMeeting>,
  ) {
    super(ChaptersUsersMeetingRepository, 'ChaptersUsersMeetingRepository');
  }
}
