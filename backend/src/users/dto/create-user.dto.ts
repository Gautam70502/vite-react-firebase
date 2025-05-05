import {
  IsArray,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  ValidateNested,
} from 'class-validator';
import { Gender, MemberShipStatus } from '../types/user.types';
import { Role } from 'src/auth/types/auth.types';
import { UserAddressDto } from '../../address/dto/address-user.dto';
import { Type } from 'class-transformer';
import { userContactsDto } from '../../contact/dto/contact-user.dto';
import { companyUserDto } from '../../company/dto/company-user.dto';
import { BaseDto } from 'src/base/dto/base.dto';
import { Mybio } from 'src/user-bio/entities/user-bio.entity';
import { TopProfile } from 'src/topprofile/entities/topprofile.entity';
import { GainedBio } from 'src/gainedbio/entities/gainedbio.entity';
import { CreateChaptersUserDto } from 'src/chapters_users/dto/create-chapters_user.dto';

export class CreateUserDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  @IsOptional()
  profile: string;

  @IsString()
  @IsOptional()
  language: string;

  @IsString()
  @IsOptional()
  timezone: string;

  @IsString()
  @IsOptional()
  website: string;

  @IsString()
  @IsOptional()
  socialMediaLink: string;

  @IsOptional()
  @IsEnum(MemberShipStatus)
  membershipStatus: MemberShipStatus;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UserAddressDto)
  addresses: UserAddressDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => userContactsDto)
  contacts: userContactsDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => companyUserDto)
  companies: companyUserDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateChaptersUserDto)
  chapterUsers: CreateChaptersUserDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Mybio)
  myBio: Mybio;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => TopProfile)
  topProfile: TopProfile;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => GainedBio)
  gainedBio: GainedBio;

  @IsNotEmpty()
  @IsDateString()
  renewalDueDate: Date;
}
