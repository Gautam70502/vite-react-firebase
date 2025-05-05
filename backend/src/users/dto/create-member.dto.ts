import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';
import { CreateBusinessReferenceDto } from './business-reference.dto';

export class CreateMemberDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  chapterId: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  invitedBy: string;

  @IsString()
  @IsNotEmpty()
  heard_about_bni: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  industry: string;

  @IsString()
  @IsNotEmpty()
  businessAddress1: string;

  @IsString()
  @IsOptional()
  businessAddress2: string;

  @IsString()
  @IsNotEmpty()
  businessCity: string;

  @IsString()
  @IsNotEmpty()
  businessState: string;

  @IsNumber()
  @IsNotEmpty()
  businessPincode: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  website: string;

  @IsNumber()
  @IsNotEmpty()
  contact_no: string;

  @IsNumber()
  @IsOptional()
  secondary_contact_no: string;

  @IsString()
  @IsNotEmpty()
  gstNumber: string;

  @IsBoolean()
  @IsNotEmpty()
  bni_commitment_agreement: boolean;

  @IsBoolean()
  @IsNotEmpty()
  substitute_commitment: boolean;

  @IsBoolean()
  @IsNotEmpty()
  referral_commitment: boolean;

  @IsNumber()
  @IsNotEmpty()
  referral_ability_rating: number;

  @IsBoolean()
  @IsNotEmpty()
  previous_bni_membership: boolean;

  @IsBoolean()
  @IsNotEmpty()
  other_networking_organizations: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBusinessReferenceDto)
  businessReference: CreateBusinessReferenceDto[];
}
