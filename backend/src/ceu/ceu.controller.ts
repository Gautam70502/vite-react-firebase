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
  UseGuards,
} from '@nestjs/common';
import { CeuService } from './ceu.service';
import { CreateCeuDto } from './dto/create-ceu.dto';
import { UpdateCeuDto } from './dto/update-ceu.dto';
import { Request } from 'express';
import { PaginationOptions } from 'src/base/types/base.types';
import { Ceu } from './entities/ceu.entity';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { Roles } from 'src/auth/decorator/auth.roles';
import { Role } from 'src/auth/types/auth.types';
import { getUserId } from 'src/utils/helpers';
@UseGuards(AuthGuard, RoleGuard)
@Controller('ceu')
export class CeuController {
  constructor(private readonly ceuService: CeuService) {}

  @Roles(Role.Admin)
  @Post()
  create(@Body() createCeuDto: CreateCeuDto, @Req() request: Request) {
    createCeuDto.createdBy = getUserId(request);
    return this.ceuService.create(createCeuDto);
  }

  @Get()
  findAll(@Query() query: PaginationOptions<Ceu>) {
    return this.ceuService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ceuService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCeuDto: UpdateCeuDto,
    @Req() request: Request,
  ) {
    updateCeuDto.updatedBy = getUserId(request);
    return this.ceuService.update(id, updateCeuDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteCeuDto: UpdateCeuDto,
    @Req() request: Request,
  ) {
    deleteCeuDto.deletedBy = getUserId(request);
    return this.ceuService.remove(id, deleteCeuDto);
  }
}
