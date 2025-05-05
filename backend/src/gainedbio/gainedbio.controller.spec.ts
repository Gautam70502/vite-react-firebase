import { Test, TestingModule } from '@nestjs/testing';
import { GainedbioController } from './gainedbio.controller';
import { GainedbioService } from './gainedbio.service';

describe('GainedbioController', () => {
  let controller: GainedbioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GainedbioController],
      providers: [GainedbioService],
    }).compile();

    controller = module.get<GainedbioController>(GainedbioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
