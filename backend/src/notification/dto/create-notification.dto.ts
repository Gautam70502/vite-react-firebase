import { IsBoolean, IsNotEmpty } from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';

export class CreateNotificationDto extends BaseDto {
  @IsNotEmpty()
  @IsBoolean()
  isRead: boolean;
}
