import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';

export class CreateUserBioDto extends BaseDto {
  @IsNumber()
  yearInBussiness: number;

  @IsString()
  @IsOptional()
  previousTypesOfJobs: string;

  @IsString()
  @IsOptional()
  hobbies: string;

  @IsString()
  @IsOptional()
  cityOfResidance: string;

  @IsString()
  @IsOptional()
  yearsInThatCity: string;

  @IsString()
  @IsOptional()
  myBurningDesireIsTo: string;

  @IsString()
  @IsOptional()
  somethingNoOneHereKnowsAboutMe: string;

  @IsString()
  @IsOptional()
  myKeyToSuccess: string;

  @IsNotEmpty()
  @IsUUID()
  @IsOptional()
  userId?: string;
}
