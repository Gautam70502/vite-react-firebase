import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base/base.service';
import { Repository } from 'typeorm';
import { Meeting } from './entities/meeting.entity';

@Injectable()
export class MeetingService extends BaseService<Meeting> {
  constructor(
    @InjectRepository(Meeting)
    public meetingRepository: Repository<Meeting>,
  ) {
    super(meetingRepository, 'Meeting');
  }
}
