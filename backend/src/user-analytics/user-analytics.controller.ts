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
import { UserAnalyticsService } from './user-analytics.service';
import { CreateUserAnalyticDto } from './dto/create-user-analytic.dto';
import { UpdateUserAnalyticDto } from './dto/update-user-analytic.dto';
import { PaginationOptions } from 'src/base/types/base.types';
import { UserAnalytics } from './entities/user-analytic.entity';
import { Request } from 'express';
import { getUserId } from 'src/utils/helpers';

@Controller('user-analytics')
export class UserAnalyticsController {
  constructor(private readonly userAnalyticsService: UserAnalyticsService) {}

  @Post()
  create(
    @Body() createUserAnalyticDto: CreateUserAnalyticDto,
    @Req() request: Request,
  ) {
    createUserAnalyticDto.createdBy = getUserId(request);
    return this.userAnalyticsService.create(createUserAnalyticDto);
  }

  @Get()
  findAll(@Query() query: PaginationOptions<UserAnalytics>) {
    return this.userAnalyticsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAnalyticsService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserAnalyticDto: UpdateUserAnalyticDto,
    @Req() request: Request,
  ) {
    updateUserAnalyticDto.updatedBy = getUserId(request);
    return this.userAnalyticsService.update(id, updateUserAnalyticDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteUserAnalyticDto: UpdateUserAnalyticDto,
    @Req() request: Request,
  ) {
    deleteUserAnalyticDto.deletedBy = getUserId(request);
    return this.userAnalyticsService.remove(id, deleteUserAnalyticDto);
  }
}
