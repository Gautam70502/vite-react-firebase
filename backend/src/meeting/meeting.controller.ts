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
import { MeetingService } from './meeting.service';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { PaginationOptions } from 'src/base/types/base.types';
import { Meeting } from './entities/meeting.entity';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { Roles } from 'src/auth/decorator/auth.roles';
import { Role } from 'src/auth/types/auth.types';
import { getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard, RoleGuard)
@Controller('meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @Roles(Role.Admin)
  @Post()
  create(@Body() createMeetingDto: CreateMeetingDto, @Req() request: Request) {
    createMeetingDto.createdBy = getUserId(request);
    return this.meetingService.create(createMeetingDto);
  }

  @Get()
  findAll(@Query() query: PaginationOptions<Meeting>) {
    return this.meetingService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meetingService.findOne({ id });
  }

  @Roles(Role.Admin)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMeetingDto: UpdateMeetingDto,
    @Req() request: Request,
  ) {
    updateMeetingDto.updatedBy = getUserId(request);
    return this.meetingService.update(id, updateMeetingDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteMeetingDto: UpdateMeetingDto,
    @Req() request: Request,
  ) {
    deleteMeetingDto.deletedBy = getUserId(request);
    return this.meetingService.remove(id, deleteMeetingDto);
  }
}
