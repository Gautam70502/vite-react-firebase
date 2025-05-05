import {
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
import { updateUserAddressDto, UserAddressDto } from './dto/address-user.dto';
import { AddressService } from './address.service';
import { Request } from 'express';
import { PaginationOptions } from 'src/base/types/base.types';
import { Address } from './entity/address.entity';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard)
@Controller('address')
export class AddressController {
  constructor(private readonly userAddressService: AddressService) {}

  @Post()
  async create(
    @Body() createUserAddresDto: UserAddressDto,
    @Req() request: Request,
  ) {
    createUserAddresDto.createdBy = getUserId(request);
    createUserAddresDto.userId = getUserId(request);

    return this.userAddressService.create(createUserAddresDto);
  }

  @Get()
  findAll(@Query() query: PaginationOptions<Address>) {
    return this.userAddressService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAddressService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserAddressDto: updateUserAddressDto,
    @Req() request: Request,
  ) {
    updateUserAddressDto.updatedBy = getUserId(request);
    return this.userAddressService.update(id, updateUserAddressDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteChapterDto: updateUserAddressDto,
    @Req() request: Request,
  ) {
    deleteChapterDto.deletedBy = getUserId(request);
    return this.userAddressService.remove(id, deleteChapterDto);
  }
}
