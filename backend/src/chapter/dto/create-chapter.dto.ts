import { IsOptional, IsString, IsUUID } from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';

export class CreateChapterDto extends BaseDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsUUID()
  cityId: string;
}
