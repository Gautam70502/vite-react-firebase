import { Test, TestingModule } from '@nestjs/testing';
import { ChapterCourseController } from './chapter-course.controller';
import { ChapterCourseService } from './chapter-course.service';

describe('ChapterCourseController', () => {
  let controller: ChapterCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChapterCourseController],
      providers: [ChapterCourseService],
    }).compile();

    controller = module.get<ChapterCourseController>(ChapterCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
