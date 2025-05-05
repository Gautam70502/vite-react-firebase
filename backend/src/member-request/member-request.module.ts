import { Module } from '@nestjs/common';
import { MemberRequestService } from './member-request.service';
import { MemberRequestController } from './member-request.controller';

@Module({
  controllers: [MemberRequestController],
  providers: [MemberRequestService],
})
export class MemberRequestModule {}
