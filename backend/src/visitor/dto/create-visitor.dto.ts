import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
} from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';
import { VisitorType } from '../types/visitor.types';

export class CreateVisitorDto extends BaseDto {
  @IsNotEmpty()
  @IsUUID()
  registerBy: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[6789]\d{9}$/)
  phone: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  companyName: string;

  @IsEnum(VisitorType)
  @IsNotEmpty()
  visitorType: VisitorType;

  @IsOptional()
  @IsString()
  industry: string;

  @IsNotEmpty()
  @IsUUID()
  chapterId: string;
}
