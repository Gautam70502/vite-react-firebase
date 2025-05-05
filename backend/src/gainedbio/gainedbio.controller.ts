import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Query,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { GainedbioService } from './gainedbio.service';
import { CreateGainedbioDto } from './dto/create-gainedbio.dto';
import { UpdateGainedbioDto } from './dto/update-gainedbio.dto';
import { Request } from 'express';
import { PaginationOptions } from 'src/base/types/base.types';
import { GainedBio } from './entities/gainedbio.entity';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard)
@Controller('gainedbio')
export class GainedbioController {
  constructor(
    private readonly gainedbioService: GainedbioService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  async create(
    @Body() createGainedbioDto: CreateGainedbioDto,
    @Req() request: Request,
  ) {
    createGainedbioDto.createdBy = getUserId(request);
    return await this.gainedbioService.create(createGainedbioDto);
  }

  @Get()
  async findAll(@Query() query: PaginationOptions<GainedBio>) {
    return await this.gainedbioService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.gainedbioService.findOne({ id });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGainedbioDto: UpdateGainedbioDto,
    @Req() request: Request,
  ) {
    updateGainedbioDto.updatedBy = getUserId(request);
    return await this.gainedbioService.update(id, updateGainedbioDto);
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @Body() deleteGainedbioDto: UpdateGainedbioDto,
    @Req() request: Request,
  ) {
    deleteGainedbioDto.deletedBy = getUserId(request);
    return await this.gainedbioService.remove(id, deleteGainedbioDto);
  }
}
