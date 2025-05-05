import { Test, TestingModule } from '@nestjs/testing';
import { OneToOneController } from './one-to-one.controller';
import { OneToOneService } from './one-to-one.service';

describe('OneToOneController', () => {
  let controller: OneToOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OneToOneController],
      providers: [OneToOneService],
    }).compile();

    controller = module.get<OneToOneController>(OneToOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
