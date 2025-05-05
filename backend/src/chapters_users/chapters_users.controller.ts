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
import { ChaptersUsersService } from './chapters_users.service';
import { CreateChaptersUserDto } from './dto/create-chapters_user.dto';
import { UpdateChaptersUserDto } from './dto/update-chapters_user.dto';
import { PaginationOptions } from 'src/base/types/base.types';
import { ChapterUsers } from './entities/chapters_users.entity';
import { Request } from 'express';
import { Roles } from 'src/auth/decorator/auth.roles';
import { Role } from 'src/auth/types/auth.types';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard, RoleGuard)
@Controller('chapter-user')
export class ChaptersUsersController {
  constructor(private readonly chaptersUsersService: ChaptersUsersService) {}

  @Roles(Role.Admin)
  @Post()
  create(
    @Body() createChaptersUserDto: CreateChaptersUserDto,
    @Req() request: Request,
  ) {
    createChaptersUserDto.createdBy = getUserId(request);
    return this.chaptersUsersService.create(createChaptersUserDto);
  }

  @Get()
  findAll(@Query() query: PaginationOptions<ChapterUsers>) {
    return this.chaptersUsersService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chaptersUsersService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChaptersUserDto: UpdateChaptersUserDto,
    @Req() request: Request,
  ) {
    updateChaptersUserDto.updatedBy = getUserId(request);
    return this.chaptersUsersService.update(id, updateChaptersUserDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteChaptersUserDto: UpdateChaptersUserDto,
    @Req() request: Request,
  ) {
    deleteChaptersUserDto.deletedBy = getUserId(request);
    return this.chaptersUsersService.remove(id, deleteChaptersUserDto);
  }
}
