import { PartialType } from '@nestjs/mapped-types';
import { CreateUserBioDto } from './create-user-bio.dto';

export class UpdateUserBioDto extends PartialType(CreateUserBioDto) {}
