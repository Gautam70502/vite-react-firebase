import { Injectable } from '@nestjs/common';
import { CreateMemberRequestDto } from './dto/create-member-request.dto';
import { UpdateMemberRequestDto } from './dto/update-member-request.dto';

@Injectable()
export class MemberRequestService {
  create(createMemberRequestDto: CreateMemberRequestDto) {
    return 'This action adds a new memberRequest';
  }

  findAll() {
    return `This action returns all memberRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memberRequest`;
  }

  update(id: number, updateMemberRequestDto: UpdateMemberRequestDto) {
    return `This action updates a #${id} memberRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} memberRequest`;
  }
}
