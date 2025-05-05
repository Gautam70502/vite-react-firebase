import { PartialType } from '@nestjs/mapped-types';
import { CreateUserAnalyticDto } from './create-user-analytic.dto';

export class UpdateUserAnalyticDto extends PartialType(CreateUserAnalyticDto) {}
