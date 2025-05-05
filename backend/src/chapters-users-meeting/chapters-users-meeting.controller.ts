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
import { ChaptersUsersMeetingService } from './chapters-users-meeting.service';
import { CreateChaptersUsersMeetingDto } from './dto/create-chapters-users-meeting.dto';
import { UpdateChaptersUsersMeetingDto } from './dto/update-chapters-users-meeting.dto';
import { PaginationOptions } from 'src/base/types/base.types';
import { ChaptersUsersMeeting } from './entities/chapters-users-meeting.entity';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { Roles } from 'src/auth/decorator/auth.roles';
import { Role } from 'src/auth/types/auth.types';
import { getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard, RoleGuard)
@Controller('chapters-users-meeting')
export class ChaptersUsersMeetingController {
  constructor(
    private readonly chaptersUsersMeetingService: ChaptersUsersMeetingService,
  ) {}

  @Roles(Role.Admin)
  @Post()
  create(
    @Body() createChaptersUsersMeetingDto: CreateChaptersUsersMeetingDto,
    @Req() request: Request,
  ) {
    createChaptersUsersMeetingDto.userId = getUserId(request);
    return this.chaptersUsersMeetingService.create(
      createChaptersUsersMeetingDto,
    );
  }

  @Get()
  findAll(@Query() query: PaginationOptions<ChaptersUsersMeeting>) {
    return this.chaptersUsersMeetingService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chaptersUsersMeetingService.findOne({ id });
  }

  @Roles(Role.Admin)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChaptersUsersMeetingDto: UpdateChaptersUsersMeetingDto,
    @Req() request: Request,
  ) {
    updateChaptersUsersMeetingDto.updatedBy = getUserId(request);
    return this.chaptersUsersMeetingService.update(
      id,
      updateChaptersUsersMeetingDto,
    );
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteChaptersUsersMeetingDto: UpdateChaptersUsersMeetingDto,
    @Req() request: Request,
  ) {
    deleteChaptersUsersMeetingDto.deletedBy = getUserId(request);
    return this.chaptersUsersMeetingService.remove(
      id,
      deleteChaptersUsersMeetingDto,
    );
  }
}
