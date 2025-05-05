import { Test, TestingModule } from '@nestjs/testing';
import { ChaptersUsersMeetingController } from './chapters-users-meeting.controller';
import { ChaptersUsersMeetingService } from './chapters-users-meeting.service';

describe('ChaptersUsersMeetingController', () => {
  let controller: ChaptersUsersMeetingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChaptersUsersMeetingController],
      providers: [ChaptersUsersMeetingService],
    }).compile();

    controller = module.get<ChaptersUsersMeetingController>(ChaptersUsersMeetingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
