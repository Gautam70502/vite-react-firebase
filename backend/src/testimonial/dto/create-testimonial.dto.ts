import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { BaseDto } from 'src/base/dto/base.dto';
import { TestimonialType } from '../types/testimonial.types';

export class CreateTestimonialDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  message: string;

  @IsNotEmpty()
  @IsString()
  to: string;

  @IsNotEmpty()
  @IsString()
  from: string;

  @IsNotEmpty()
  @IsEnum(TestimonialType)
  type: TestimonialType;
}
