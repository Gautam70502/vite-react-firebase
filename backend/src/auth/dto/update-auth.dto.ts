import { OmitType } from '@nestjs/mapped-types';
import { UsersAuthDto } from './create-auth.dto';

export class UpdatePasswordDto extends OmitType(UsersAuthDto, ['email']) {}
