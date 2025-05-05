import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemberRequestService } from './member-request.service';
import { CreateMemberRequestDto } from './dto/create-member-request.dto';
import { UpdateMemberRequestDto } from './dto/update-member-request.dto';

@Controller('member-request')
export class MemberRequestController {
  constructor(private readonly memberRequestService: MemberRequestService) {}

  @Post()
  create(@Body() createMemberRequestDto: CreateMemberRequestDto) {
    return this.memberRequestService.create(createMemberRequestDto);
  }

  @Get()
  findAll() {
    return this.memberRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemberRequestDto: UpdateMemberRequestDto) {
    return this.memberRequestService.update(+id, updateMemberRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberRequestService.remove(+id);
  }
}
