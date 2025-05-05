import { Test, TestingModule } from '@nestjs/testing';
import { TyfcbController } from './tyfcb.controller';
import { TyfcbService } from './tyfcb.service';

describe('TyfcbController', () => {
  let controller: TyfcbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TyfcbController],
      providers: [TyfcbService],
    }).compile();

    controller = module.get<TyfcbController>(TyfcbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
