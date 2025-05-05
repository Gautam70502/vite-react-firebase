import { PartialType } from '@nestjs/mapped-types';
import { CreateChapterCourseDto } from './create-chapter-course.dto';

export class UpdateChapterCourseDto extends PartialType(CreateChapterCourseDto) {}
