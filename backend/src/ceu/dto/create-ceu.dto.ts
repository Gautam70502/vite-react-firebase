import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';

export class CreateCeuDto extends BaseDto {
  @IsUUID()
  @IsNotEmpty()
  chapterCourseId: string;

  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsNumber()
  @IsNotEmpty()
  quantityEarned: number;
}
