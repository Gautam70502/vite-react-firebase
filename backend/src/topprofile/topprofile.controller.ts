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
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { TopprofileService } from './topprofile.service';
import { CreateTopprofileDto } from './dto/create-topprofile.dto';
import { UpdateTopprofileDto } from './dto/update-topprofile.dto';
import { PaginationOptions } from 'src/base/types/base.types';
import { TopProfile } from './entities/topprofile.entity';
import { Request } from 'express';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard)
@Controller('topprofile')
export class TopprofileController {
  constructor(
    private readonly topprofileService: TopprofileService,
    private readonly userService: UsersService,
  ) {}
  @Post()
  async create(
    @Body() createTopprofileDto: CreateTopprofileDto,
    @Req() request: Request,
  ) {
    createTopprofileDto.createdBy = getUserId(request);
    return await this.topprofileService.create(createTopprofileDto);
  }

  @Get()
  async findAll(@Query() query: PaginationOptions<TopProfile>) {
    return await this.topprofileService.findAll(query);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.topprofileService.findOne({ id });
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTopprofileDto: UpdateTopprofileDto,
    @Req() req: Request,
  ) {
    updateTopprofileDto.updatedBy = getUserId(req);
    return await this.topprofileService.update(id, updateTopprofileDto);
  }
  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @Body() deleteTopprofileDto: UpdateTopprofileDto,
    @Req() req: Request,
  ) {
    deleteTopprofileDto.deletedBy = getUserId(req);
    return await this.topprofileService.remove(id, deleteTopprofileDto);
  }
}
