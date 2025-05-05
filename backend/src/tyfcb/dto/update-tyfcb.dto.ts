import { PartialType } from '@nestjs/mapped-types';
import { CreateTyfcbDto } from './create-tyfcb.dto';

export class UpdateTyfcbDto extends PartialType(CreateTyfcbDto) {}
