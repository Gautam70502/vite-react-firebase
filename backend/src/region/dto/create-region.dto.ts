import { Type } from 'class-transformer';
import {
  IsArray,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';
import { CreateCityDto } from 'src/city/dto/create-city.dto';

export class CreateRegionDto extends BaseDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsUUID()
  countryId: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCityDto)
  cities: CreateCityDto[];
}
