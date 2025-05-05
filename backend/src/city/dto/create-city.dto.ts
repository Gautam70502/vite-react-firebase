import { Type } from 'class-transformer';
import {
  IsArray,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';
import { CreateChapterDto } from 'src/chapter/dto/create-chapter.dto';

export class CreateCityDto extends BaseDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsUUID()
  regionId: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateChapterDto)
  chapters: CreateChapterDto[];
}
