import { Test, TestingModule } from '@nestjs/testing';
import { ChaptersUsersMeetingService } from './chapters-users-meeting.service';

describe('ChaptersUsersMeetingService', () => {
  let service: ChaptersUsersMeetingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChaptersUsersMeetingService],
    }).compile();

    service = module.get<ChaptersUsersMeetingService>(ChaptersUsersMeetingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
