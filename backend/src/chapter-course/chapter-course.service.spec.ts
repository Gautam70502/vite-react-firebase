import { Test, TestingModule } from '@nestjs/testing';
import { ChapterCourseService } from './chapter-course.service';

describe('ChapterCourseService', () => {
  let service: ChapterCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChapterCourseService],
    }).compile();

    service = module.get<ChapterCourseService>(ChapterCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
