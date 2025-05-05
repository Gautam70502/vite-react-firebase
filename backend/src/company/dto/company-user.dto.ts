import { PartialType } from '@nestjs/mapped-types';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';

export class companyUserDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  logo: string;

  @IsString()
  @IsOptional()
  industry: string;

  @IsString()
  @IsOptional()
  classification: string;

  @IsString()
  @IsOptional()
  fax: string;

  @IsString()
  @IsOptional()
  tollfree: number;

  @IsNotEmpty()
  @IsString()
  gstNumber: string;

  @IsNotEmpty()
  @IsString()
  gstRegisterState: string;

  @IsString()
  @IsOptional()
  bussinessSummry: string;

  @IsString()
  @IsOptional()
  keyword: string;

  @IsOptional()
  @IsUUID()
  userId?: string;
}

export class updateUsersCompanyDto extends PartialType(companyUserDto) {}
