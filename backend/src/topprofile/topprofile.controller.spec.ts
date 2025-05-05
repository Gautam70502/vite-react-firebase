import { Test, TestingModule } from '@nestjs/testing';
import { TopprofileController } from './topprofile.controller';
import { TopprofileService } from './topprofile.service';

describe('TopprofileController', () => {
  let controller: TopprofileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopprofileController],
      providers: [TopprofileService],
    }).compile();

    controller = module.get<TopprofileController>(TopprofileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
