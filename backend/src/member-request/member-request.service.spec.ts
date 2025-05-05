import { Test, TestingModule } from '@nestjs/testing';
import { MemberRequestService } from './member-request.service';

describe('MemberRequestService', () => {
  let service: MemberRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemberRequestService],
    }).compile();

    service = module.get<MemberRequestService>(MemberRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
