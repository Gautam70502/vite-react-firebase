import { Test, TestingModule } from '@nestjs/testing';
import { UserBioController } from './user-bio.controller';
import { UserBioService } from './user-bio.service';

describe('UserBioController', () => {
  let controller: UserBioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserBioController],
      providers: [UserBioService],
    }).compile();

    controller = module.get<UserBioController>(UserBioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
