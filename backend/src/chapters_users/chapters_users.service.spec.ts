import { Test, TestingModule } from '@nestjs/testing';
import { ChaptersUsersService } from './chapters_users.service';

describe('ChaptersUsersService', () => {
  let service: ChaptersUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChaptersUsersService],
    }).compile();

    service = module.get<ChaptersUsersService>(ChaptersUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
