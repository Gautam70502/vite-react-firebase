import { PartialType } from '@nestjs/mapped-types';
import { CreateReferralGivenDto } from './create-referral-given.dto';

export class UpdateReferralGivenDto extends PartialType(
  CreateReferralGivenDto,
) {}
