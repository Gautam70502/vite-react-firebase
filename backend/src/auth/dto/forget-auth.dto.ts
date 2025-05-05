import { OmitType } from '@nestjs/mapped-types';
import { UsersAuthDto } from './create-auth.dto';

export class forgetAuthDto extends OmitType(UsersAuthDto, ['password']) {}
