import { Test, TestingModule } from '@nestjs/testing';
import { CeuService } from './ceu.service';

describe('CeuService', () => {
  let service: CeuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CeuService],
    }).compile();

    service = module.get<CeuService>(CeuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
