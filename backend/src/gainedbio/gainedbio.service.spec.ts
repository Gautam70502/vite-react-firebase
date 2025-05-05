import { Test, TestingModule } from '@nestjs/testing';
import { GainedbioService } from './gainedbio.service';

describe('GainedbioService', () => {
  let service: GainedbioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GainedbioService],
    }).compile();

    service = module.get<GainedbioService>(GainedbioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
