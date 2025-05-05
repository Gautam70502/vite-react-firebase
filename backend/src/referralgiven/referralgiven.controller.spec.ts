import { Test, TestingModule } from '@nestjs/testing';
import { ReferralGivenController } from './referralgiven.controller';
import { ReferralGivenService } from './referralgiven.service';

describe('ReferralController', () => {
  let controller: ReferralGivenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferralGivenController],
      providers: [ReferralGivenService],
    }).compile();

    controller = module.get<ReferralGivenController>(ReferralGivenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
