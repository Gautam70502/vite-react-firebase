import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';
import { MeetingType } from '../types/meeting.types';

export class CreateMeetingDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  meetingDate: string;

  @IsOptional()
  @IsEnum(MeetingType)
  meetingType: MeetingType;

  @IsNotEmpty()
  @IsUUID()
  chapterId: string;
}
