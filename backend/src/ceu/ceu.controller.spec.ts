import { Test, TestingModule } from '@nestjs/testing';
import { CeuController } from './ceu.controller';
import { CeuService } from './ceu.service';

describe('CeuController', () => {
  let controller: CeuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CeuController],
      providers: [CeuService],
    }).compile();

    controller = module.get<CeuController>(CeuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
