import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
  UseInterceptors,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from 'src/auth/types/auth.types';
import { Roles } from 'src/auth/decorator/auth.roles';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { Request } from 'express';
import { responseInterceptor } from './interceptor/api.interceptor';
import { UpdateUserDto } from './dto/update-user.dto';
import { getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard, RoleGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(responseInterceptor)
  // @Roles(Role.Admin)
  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Req() req: Request) {
    return await this.usersService.create(createUserDto, req);
  }

  @Roles(Role.Admin)
  @Patch('admin/:id')
  updateByAdmin(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Req() req: Request,
  ) {
    return this.usersService.update(id, updateUserDto, req);
  }

  @UseInterceptors(responseInterceptor)
  @Patch('update')
  update(@Req() request: Request, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(getUserId(request), updateUserDto, request);
  }

  @Roles(Role.Admin)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('by-email/:email')
  findOne(@Param('email') email: string) {
    return this.usersService.findOne({ email }, [
      'addresses',
      'contacts',
      'company',
      'mybio',
      'gainedbio',
      'topprofile',
    ]);
  }

  @Get('profile')
  userProfile(@Req() request: Request) {
    console.log(getUserId(request));

    return this.usersService.findOne({ id: getUserId(request) }, [
      'addresses',
      'contacts',
      'company',
      'mybio',
      'gainedbio',
      'topprofile',
    ]);
  }
}
