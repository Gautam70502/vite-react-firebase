import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';

export class CreateChapterCourseDto extends BaseDto {
  @IsNotEmpty()
  @IsUUID()
  chapterId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  credit: number;
}
