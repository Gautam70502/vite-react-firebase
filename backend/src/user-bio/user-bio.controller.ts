import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserBioService } from './user-bio.service';
import { CreateUserBioDto } from './dto/create-user-bio.dto';
import { UpdateUserBioDto } from './dto/update-user-bio.dto';
import { PaginationOptions } from 'src/base/types/base.types';
import { Mybio } from './entities/user-bio.entity';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard)
@Controller('user-bio')
export class UserBioController {
  constructor(private readonly userBioService: UserBioService) {}
  @Post()
  create(@Body() createUserBioDto: CreateUserBioDto, @Req() request: Request) {
    createUserBioDto.createdBy = getUserId(request);
    return this.userBioService.create(createUserBioDto);
  }
  @Get()
  findAll(@Query() query: PaginationOptions<Mybio>) {
    return this.userBioService.findAll(query);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userBioService.findOne({ id });
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserBioDto: UpdateUserBioDto,
    @Req() req: Request,
  ) {
    updateUserBioDto.updatedBy = getUserId(req);
    return this.userBioService.update(id, updateUserBioDto);
  }
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteUserBioDto: UpdateUserBioDto,
    @Req() req: Request,
  ) {
    deleteUserBioDto.deletedBy = getUserId(req);
    return this.userBioService.remove(id, deleteUserBioDto);
  }
}
