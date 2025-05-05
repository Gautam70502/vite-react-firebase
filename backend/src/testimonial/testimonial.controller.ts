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
} from '@nestjs/common';
import { TestimonialService } from './testimonial.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { Testimonial } from './entities/testimonial.entity';
import { PaginationOptions } from 'src/base/types/base.types';
import { Request } from 'express';
import { getUserId } from 'src/utils/helpers';

@Controller('testimonial')
export class TestimonialController {
  constructor(private readonly testimonialService: TestimonialService) {}

  @Post()
  create(
    @Body() createTestimonialDto: CreateTestimonialDto,
    @Req() request: Request,
  ) {
    createTestimonialDto.createdBy = getUserId(request);
    return this.testimonialService.create(createTestimonialDto);
  }

  @Get()
  findAll(@Query() query: PaginationOptions<Testimonial>) {
    return this.testimonialService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testimonialService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestimonialDto: UpdateTestimonialDto,
    @Req() request: Request,
  ) {
    updateTestimonialDto.deletedBy = getUserId(request);
    return this.testimonialService.update(id, updateTestimonialDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteTestimonialDto: UpdateTestimonialDto,
    @Req() request: Request,
  ) {
    deleteTestimonialDto.deletedBy = getUserId(request);
    return this.testimonialService.remove(id, deleteTestimonialDto);
  }
}
