import { Test, TestingModule } from '@nestjs/testing';
import { UserfcmtokenService } from './userfcmtoken.service';

describe('UserfcmtokenService', () => {
  let service: UserfcmtokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserfcmtokenService],
    }).compile();

    service = module.get<UserfcmtokenService>(UserfcmtokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
