import { Module } from '@nestjs/common';
import { ChapterCourseService } from './chapter-course.service';
import { ChapterCourseController } from './chapter-course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChapterCourse } from './entities/chapter-course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChapterCourse])],
  controllers: [ChapterCourseController],
  providers: [ChapterCourseService],
})
export class ChapterCourseModule {}
