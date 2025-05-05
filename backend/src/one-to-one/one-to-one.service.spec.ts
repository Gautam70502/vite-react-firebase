import { Test, TestingModule } from '@nestjs/testing';
import { OneToOneService } from './one-to-one.service';

describe('OneToOneService', () => {
  let service: OneToOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OneToOneService],
    }).compile();

    service = module.get<OneToOneService>(OneToOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
