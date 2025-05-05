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
import { VisitorService } from './visitor.service';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { Request } from 'express';
import { UpdateVisitorDto } from './dto/update-visitor.dto';
import { PaginationOptions } from 'src/base/types/base.types';
import { Visitor } from './entities/visitor.entity';
import { getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard)
@Controller('visitor')
export class VisitorController {
  constructor(private readonly visitorService: VisitorService) {}

  @Post()
  create(@Body() createVisitorDto: CreateVisitorDto, @Req() request: Request) {
    createVisitorDto.registerBy = getUserId(request);
    return this.visitorService.create(createVisitorDto);
  }
  @Get()
  findAll(@Query() query: PaginationOptions<Visitor>) {
    return this.visitorService.findAll(query);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitorService.findOne({ id });
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVisitorDto: UpdateVisitorDto,
    @Req() req: Request,
  ) {
    updateVisitorDto.updatedBy = getUserId(req);
    return this.visitorService.update(id, updateVisitorDto);
  }
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteVisitorDto: UpdateVisitorDto,
    @Req() req: Request,
  ) {
    deleteVisitorDto.deletedBy = getUserId(req);
    return this.visitorService.remove(id, deleteVisitorDto);
  }
}
