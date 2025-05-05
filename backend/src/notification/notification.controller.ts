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
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PaginationOptions } from 'src/base/types/base.types';
import { Notification } from './entities/notification.entity';
import { Request } from 'express';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { Roles } from 'src/auth/decorator/auth.roles';
import { Role } from 'src/auth/types/auth.types';
import { getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard)
@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.create(createNotificationDto);
  }

  @Roles(Role.Admin)
  @Get()
  findAll(@Query() query: PaginationOptions<Notification>) {
    return this.notificationService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto,
    @Req() req: Request,
  ) {
    updateNotificationDto.updatedBy = getUserId(req);
    return this.notificationService.update(id, updateNotificationDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteNotificationDto: UpdateNotificationDto,
    @Req() req: Request,
  ) {
    deleteNotificationDto.deletedBy = getUserId(req);
    return this.notificationService.remove(id, deleteNotificationDto);
  }
}
