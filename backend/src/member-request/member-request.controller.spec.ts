import { Test, TestingModule } from '@nestjs/testing';
import { MemberRequestController } from './member-request.controller';
import { MemberRequestService } from './member-request.service';

describe('MemberRequestController', () => {
  let controller: MemberRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberRequestController],
      providers: [MemberRequestService],
    }).compile();

    controller = module.get<MemberRequestController>(MemberRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
