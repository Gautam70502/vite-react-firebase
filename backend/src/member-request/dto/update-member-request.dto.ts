import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberRequestDto } from './create-member-request.dto';

export class UpdateMemberRequestDto extends PartialType(CreateMemberRequestDto) {}
