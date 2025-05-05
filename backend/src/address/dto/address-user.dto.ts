import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { addressType } from '../../users/types/user.types';
import { PartialType } from '@nestjs/mapped-types';
import { BaseDto } from 'src/base/dto/base.dto';

export class UserAddressDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  addressLine: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  pincode: string;

  @IsEnum(addressType)
  @IsNotEmpty()
  type: addressType;

  @IsOptional()
  @IsUUID()
  userId?: string;
}

export class updateUserAddressDto extends PartialType(UserAddressDto) {}
