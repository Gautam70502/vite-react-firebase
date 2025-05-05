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
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { PaginationOptions } from 'src/base/types/base.types';
import { Region } from './entities/region.entity';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Request } from 'express';
import { Role } from 'src/auth/types/auth.types';
import { Roles } from 'src/auth/decorator/auth.roles';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard, RoleGuard)
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Roles(Role.Admin)
  @Post()
  create(@Body() createRegionDto: CreateRegionDto, @Req() request: Request) {
    createRegionDto.createdBy = getUserId(request);
    return this.regionService.create(createRegionDto);
  }

  @Get()
  findAll(@Query() query: PaginationOptions<Region>) {
    return this.regionService.findAll(
      query,
      ['country', 'cities'],
      ['id', 'name', 'country.id', 'country.name', 'cities.id', 'cities.name'],
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRegionDto: UpdateRegionDto,
    @Req() request: Request,
  ) {
    updateRegionDto.updatedBy = getUserId(request);
    return this.regionService.update(id, updateRegionDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteRegionDto: UpdateRegionDto,
    @Req() request: Request,
  ) {
    deleteRegionDto.deletedBy = getUserId(request);
    return this.regionService.remove(id, deleteRegionDto);
  }
}
