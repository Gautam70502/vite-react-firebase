import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';

export class CreateOneToOneDto extends BaseDto {
  @IsUUID()
  @IsNotEmpty()
  meetWith: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  topic: string;

  @IsNotEmpty()
  @IsDateString()
  meetingDate: Date;

  @IsUUID()
  @IsNotEmpty()
  invitedBy: string;
}
