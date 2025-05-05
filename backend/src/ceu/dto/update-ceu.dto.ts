import { PartialType } from '@nestjs/mapped-types';
import { CreateCeuDto } from './create-ceu.dto';

export class UpdateCeuDto extends PartialType(CreateCeuDto) {}
