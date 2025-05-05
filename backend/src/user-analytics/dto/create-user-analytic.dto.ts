import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';

export class CreateUserAnalyticDto extends BaseDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsNumber()
  tyfcb: number;

  @IsNotEmpty()
  @IsNumber()
  totalRevenue: number;

  @IsNotEmpty()
  @IsNumber()
  oneToOnes: number;

  @IsNotEmpty()
  @IsNumber()
  referralGiven: number;

  @IsNotEmpty()
  @IsNumber()
  referralReceived: number;

  @IsNotEmpty()
  @IsNumber()
  visitor: number;
}
