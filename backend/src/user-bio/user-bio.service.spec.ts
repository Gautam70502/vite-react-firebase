import { Test, TestingModule } from '@nestjs/testing';
import { UserBioService } from './user-bio.service';

describe('UserBioService', () => {
  let service: UserBioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserBioService],
    }).compile();

    service = module.get<UserBioService>(UserBioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
