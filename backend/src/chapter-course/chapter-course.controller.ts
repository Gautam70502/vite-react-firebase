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
import { ChapterCourseService } from './chapter-course.service';
import { CreateChapterCourseDto } from './dto/create-chapter-course.dto';
import { UpdateChapterCourseDto } from './dto/update-chapter-course.dto';
import { PaginationOptions } from 'src/base/types/base.types';
import { ChapterCourse } from './entities/chapter-course.entity';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { Roles } from 'src/auth/decorator/auth.roles';
import { Role } from 'src/auth/types/auth.types';
import { getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard, RoleGuard)
@Controller('chapter-course')
export class ChapterCourseController {
  constructor(private readonly chapterCourseService: ChapterCourseService) {}

  @Roles(Role.Admin)
  @Post()
  create(
    @Body() createChapterCourseDto: CreateChapterCourseDto,
    @Req() request: Request,
  ) {
    createChapterCourseDto.createdBy = getUserId(request);
    return this.chapterCourseService.create(createChapterCourseDto);
  }

  @Get()
  findAll(@Query() query: PaginationOptions<ChapterCourse>) {
    return this.chapterCourseService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chapterCourseService.findOne({ id });
  }

  @Roles(Role.Admin)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChapterCourseDto: UpdateChapterCourseDto,
    @Req() request: Request,
  ) {
    updateChapterCourseDto.updatedBy = getUserId(request);
    return this.chapterCourseService.update(id, updateChapterCourseDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteChapterCourseDto: UpdateChapterCourseDto,
    @Req() request: Request,
  ) {
    deleteChapterCourseDto.deletedBy = getUserId(request);
    return this.chapterCourseService.remove(id, deleteChapterCourseDto);
  }
}
