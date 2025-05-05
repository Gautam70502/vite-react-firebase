import { Test, TestingModule } from '@nestjs/testing';
import { TyfcbService } from './tyfcb.service';

describe('TyfcbService', () => {
  let service: TyfcbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TyfcbService],
    }).compile();

    service = module.get<TyfcbService>(TyfcbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
