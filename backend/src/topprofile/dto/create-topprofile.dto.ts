import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';

export class CreateTopprofileDto extends BaseDto {
  @IsString()
  @IsOptional()
  idealReferral: string;

  @IsString()
  @IsOptional()
  topProduct: string;

  @IsString()
  @IsOptional()
  topProblemSolved: string;

  @IsString()
  @IsOptional()
  myFavouriteBNIStory: string;

  @IsString()
  @IsOptional()
  myIdealReferralPartner: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
