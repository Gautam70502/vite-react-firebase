import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { getUserId } from 'src/utils/helpers';
import { Roles } from 'src/auth/decorator/auth.roles';
import { Role } from 'src/auth/types/auth.types';
import { City } from './entities/city.entity';
import { PaginationOptions } from 'src/base/types/base.types';
import { Request } from 'express';

@UseGuards(AuthGuard, RoleGuard)
@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Roles(Role.Admin)
  @Post()
  create(@Body() createCityDto: CreateCityDto, @Req() request: Request) {
    createCityDto.createdBy = getUserId(request);
    return this.cityService.create(createCityDto);
  }

  @Get()
  findAll(@Query() query: PaginationOptions<City>) {
    return this.cityService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cityService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCityDto: UpdateCityDto,
    @Req() request: Request,
  ) {
    updateCityDto.updatedBy = getUserId(request);
    return this.cityService.update(id, updateCityDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteCityDto: UpdateCityDto,
    @Req() request: Request,
  ) {
    deleteCityDto.deletedBy = getUserId(request);
    return this.cityService.remove(id, deleteCityDto);
  }
}
