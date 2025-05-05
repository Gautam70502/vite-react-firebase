import { PartialType } from '@nestjs/mapped-types';
import { CreateGainedbioDto } from './create-gainedbio.dto';

export class UpdateGainedbioDto extends PartialType(CreateGainedbioDto) {}
