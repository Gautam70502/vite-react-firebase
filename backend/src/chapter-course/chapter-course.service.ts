import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ChapterCourse } from './entities/chapter-course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ChapterCourseService extends BaseService<ChapterCourse> {
  constructor(
    @InjectRepository(ChapterCourse)
    public chapterRepository: Repository<ChapterCourse>,
  ) {
    super(chapterRepository, 'ChapterCourse');
  }
}
