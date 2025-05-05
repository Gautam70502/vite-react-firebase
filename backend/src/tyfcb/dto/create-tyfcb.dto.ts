import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';
import { BussinessType } from '../types/tyfcb.types';

export class CreateTyfcbDto extends BaseDto {
  @IsNotEmpty()
  @IsUUID()
  ThanksTo: string;

  @IsNumber()
  @IsNotEmpty()
  reffreralAmount: number;

  @IsNotEmpty()
  @IsEnum(BussinessType)
  bussinessType: BussinessType;

  @IsOptional()
  @IsString()
  comments: string;

  @IsNotEmpty()
  @IsUUID()
  thanksBy: string;
}
