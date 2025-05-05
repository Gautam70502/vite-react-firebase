import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
} from 'class-validator';
import { contactType } from '../../users/types/user.types';
import { PartialType } from '@nestjs/mapped-types';
import { BaseDto } from 'src/base/dto/base.dto';

export class userContactsDto extends BaseDto {
  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[6789]\d{9}$/)
  contact_no: string;

  @IsNotEmpty()
  @IsEnum(contactType)
  type: contactType;
}

export class updateUserContactsDto extends PartialType(userContactsDto) {}
