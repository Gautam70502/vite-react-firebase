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
import { ChapterService } from './chapter.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { PaginationOptions } from 'src/base/types/base.types';
import { Chapter } from './entities/chapter.entity';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { Roles } from 'src/auth/decorator/auth.roles';
import { Role } from 'src/auth/types/auth.types';
import { getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard, RoleGuard)
@Controller('chapter')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Roles(Role.Admin)
  @Post()
  create(@Body() createChapterDto: CreateChapterDto, @Req() request: Request) {
    createChapterDto.createdBy = getUserId(request);
    return this.chapterService.create(createChapterDto);
  }

  @Get()
  findAll(@Query() query: Record<string, any>) {
    return this.chapterService.findAll(
      query,
      ['chapterUsers', 'chapterUsers.user'],
      ['id', 'name', 'chapterUsers.id', 'chapterUsers.userId'],
    );
  }

  @Get('users')
  findAllWithUser(@Query() query: Record<string, any>) {
    return this.chapterService.findAllUser(query, [
      'chapterUsers',
      'chapterUsers.user',
    ]);

    // return this.chapterService.findUserBychapter(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chapterService.findOne({ id });
  }

  @Roles(Role.Admin)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChapterDto: UpdateChapterDto,
    @Req() request: Request,
  ) {
    updateChapterDto.updatedBy = getUserId(request);
    return this.chapterService.update(id, updateChapterDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteChapterDto: UpdateChapterDto,
    @Req() request: Request,
  ) {
    deleteChapterDto.deletedBy = getUserId(request);
    return this.chapterService.remove(id, deleteChapterDto);
  }
}
