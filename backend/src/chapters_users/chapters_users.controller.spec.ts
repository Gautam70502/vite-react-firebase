import { Test, TestingModule } from '@nestjs/testing';
import { ChaptersUsersController } from './chapters_users.controller';
import { ChaptersUsersService } from './chapters_users.service';

describe('ChaptersUsersController', () => {
  let controller: ChaptersUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChaptersUsersController],
      providers: [ChaptersUsersService],
    }).compile();

    controller = module.get<ChaptersUsersController>(ChaptersUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
