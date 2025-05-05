import { PartialType } from '@nestjs/mapped-types';
import { CreateOneToOneDto } from './create-one-to-one.dto';

export class UpdateOneToOneDto extends PartialType(CreateOneToOneDto) {}
