import { IsEnum, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';
import { ChapterRole } from '../types/chaptesr_users.types';

export class CreateChaptersUserDto extends BaseDto {
  @IsOptional()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  chapterId: string;

  @IsOptional()
  @IsEnum(ChapterRole)
  chapterRole: ChapterRole;
}
