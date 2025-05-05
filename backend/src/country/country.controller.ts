import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
  UseGuards,
  Param,
  Patch,
  Req,
  Query,
  Delete,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { Role } from 'src/auth/types/auth.types';
import { Roles } from 'src/auth/decorator/auth.roles';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Request } from 'express';
import { PaginationOptions } from 'src/base/types/base.types';
import { Country } from './entities/country.entity';
import { getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard, RoleGuard)
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Roles(Role.Admin)
  @Post()
  create(@Body() createCountryDto: CreateCountryDto, @Req() request: Request) {
    createCountryDto.createdBy = getUserId(request);
    return this.countryService.create(createCountryDto);
  }

  @Get()
  findAll(@Query() query: PaginationOptions<Country>) {
    return this.countryService.findAll(query, [], ['id', 'name']);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryService.findOne({ id });
  }

  @Roles(Role.Admin)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCountryDto: UpdateCountryDto,
    @Req() request: Request,
  ) {
    updateCountryDto.updatedBy = getUserId(request);
    return await this.countryService.update(id, updateCountryDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteCountryDto: UpdateCountryDto,
    @Req() request: Request,
  ) {
    deleteCountryDto.updatedBy = getUserId(request);
    return this.countryService.remove(id, deleteCountryDto);
  }
}
