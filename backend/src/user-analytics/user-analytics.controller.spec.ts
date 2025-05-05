import { Test, TestingModule } from '@nestjs/testing';
import { UserAnalyticsController } from './user-analytics.controller';
import { UserAnalyticsService } from './user-analytics.service';

describe('UserAnalyticsController', () => {
  let controller: UserAnalyticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAnalyticsController],
      providers: [UserAnalyticsService],
    }).compile();

    controller = module.get<UserAnalyticsController>(UserAnalyticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
