import { IsDateString, IsEnum, IsUUID } from 'class-validator';
import { Attendance } from '../types/chapters-users-meeting.types';
import { BaseDto } from 'src/base/dto/base.dto';

export class CreateChaptersUsersMeetingDto extends BaseDto {
  @IsEnum(Attendance)
  attendance: Attendance;

  @IsDateString()
  joinAt: Date;

  @IsUUID()
  userId: string;

  @IsUUID()
  meetingId: string;
}
