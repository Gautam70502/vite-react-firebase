import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  ValidateNested,
} from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';
import {
  Referralhotness,
  ReferralReceiveStatus,
  ReferralType,
} from '../types/referral.types';

class referralStatus {
  @IsBoolean()
  @IsNotEmpty()
  give_card: boolean;

  @IsBoolean()
  @IsNotEmpty()
  should_be_called: boolean;
}

export class CreateReferralGivenDto extends BaseDto {
  @IsUUID()
  referralGivenBy: string;

  @IsNotEmpty()
  @IsUUID()
  To: string;

  @IsNotEmpty()
  @IsString()
  referral: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[6789]\d{9}$/)
  telephone: string;

  @IsEnum(Referralhotness)
  @IsNotEmpty()
  referralHotness: Referralhotness;

  @IsOptional()
  comments: string;

  @IsOptional()
  address: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => referralStatus)
  referralStatus: referralStatus;

  @IsEnum(ReferralType)
  @IsNotEmpty()
  referralType: ReferralType;

  @IsEnum(ReferralReceiveStatus)
  @IsOptional()
  referralReceiveStatus: ReferralReceiveStatus;
}
