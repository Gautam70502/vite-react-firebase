import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';
import { CreateRegionDto } from 'src/region/dto/create-region.dto';

export class CreateCountryDto extends BaseDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRegionDto)
  regions: CreateRegionDto[];
}
