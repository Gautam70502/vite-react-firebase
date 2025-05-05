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
import { ContactService } from './contact.service';
import { PaginationOptions } from 'src/base/types/base.types';
import { Contacts } from './entity/contact.entity';
import { updateUserContactsDto, userContactsDto } from './dto/contact-user.dto';
import { UsersService } from 'src/users/users.service';
import { Request } from 'express';
import { getUserId } from 'src/utils/helpers';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@UseGuards(AuthGuard)
@Controller('contact')
export class ContactController {
  constructor(
    private readonly contactService: ContactService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  async create(
    @Body() createContactDto: userContactsDto,
    @Req() request: Request,
  ) {
    createContactDto.userId = getUserId(request);
    createContactDto.createdBy = getUserId(request);
    return this.contactService.create(createContactDto);
  }

  @Get()
  findAll(@Query() query: PaginationOptions<Contacts>) {
    return this.contactService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContactDto: updateUserContactsDto,
    @Req() request: Request,
  ) {
    updateContactDto.updatedBy = getUserId(request);
    return this.contactService.update(id, updateContactDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteContactDto: updateUserContactsDto,
    @Req() request: Request,
  ) {
    deleteContactDto.updatedBy = getUserId(request);
    return this.contactService.remove(id, deleteContactDto);
  }
}
