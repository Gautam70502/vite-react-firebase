import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { companyUserDto, updateUsersCompanyDto } from './dto/company-user.dto';
import { Request } from 'express';
import { UsersService } from 'src/users/users.service';
import { PaginationOptions } from 'src/base/types/base.types';
import { Company } from './entity/company.entity';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard)
@Controller('company')
export class CompanyController {
  constructor(
    private readonly companyService: CompanyService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  async create(
    @Body() createCompanyDto: companyUserDto,
    @Req() request: Request,
  ) {
    createCompanyDto.createdBy = getUserId(request);

    return this.companyService.create(createCompanyDto);
  }

  @Get()
  findAll(@Query() query: PaginationOptions<Company>) {
    return this.companyService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanyDto: updateUsersCompanyDto,
    @Req() request: Request,
  ) {
    updateCompanyDto.updatedBy = getUserId(request);
    return this.companyService.update(id, updateCompanyDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteCompanyDto: updateUsersCompanyDto,
    @Req() request: Request,
  ) {
    deleteCompanyDto.deletedBy = getUserId(request);
    return this.companyService.remove(id, deleteCompanyDto);
  }
}
