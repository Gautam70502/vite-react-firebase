import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';

export class CreateGainedbioDto extends BaseDto {
  @IsString()
  @IsOptional()
  goal: string;

  @IsString()
  @IsOptional()
  accomplishment: string;

  @IsString()
  @IsOptional()
  intrest: string;

  @IsString()
  @IsOptional()
  networks: string;

  @IsString()
  @IsOptional()
  skills: string;

  @IsUUID()
  @IsNotEmpty()
  userId: string;
}
