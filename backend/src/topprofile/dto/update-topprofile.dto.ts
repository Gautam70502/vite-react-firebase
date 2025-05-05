import { PartialType } from '@nestjs/mapped-types';
import { CreateTopprofileDto } from './create-topprofile.dto';

export class UpdateTopprofileDto extends PartialType(CreateTopprofileDto) {}
