import { PartialType } from '@nestjs/mapped-types';
import { CreateChaptersUserDto } from './create-chapters_user.dto';

export class UpdateChaptersUserDto extends PartialType(CreateChaptersUserDto) {}
