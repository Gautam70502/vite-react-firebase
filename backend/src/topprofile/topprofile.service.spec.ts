import { Test, TestingModule } from '@nestjs/testing';
import { TopprofileService } from './topprofile.service';

describe('TopprofileService', () => {
  let service: TopprofileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopprofileService],
    }).compile();

    service = module.get<TopprofileService>(TopprofileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
