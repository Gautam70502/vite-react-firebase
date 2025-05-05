import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Query,
  UseGuards,
} from '@nestjs/common';
import { OneToOneService } from './one-to-one.service';
import { CreateOneToOneDto } from './dto/create-one-to-one.dto';
import { UpdateOneToOneDto } from './dto/update-one-to-one.dto';
import { Request } from 'express';
import { PaginationOptions } from 'src/base/types/base.types';
import { Role } from 'src/auth/types/auth.types';
import { Roles } from 'src/auth/decorator/auth.roles';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { NotificationService } from 'src/notification/notification.service';
import { UserfcmtokenService } from 'src/userfcmtoken/userfcmtoken.service';
import { getUserData, getUserId } from 'src/utils/helpers';
import { OneToOnes } from './entities/one-to-one.entity';

@UseGuards(AuthGuard, RoleGuard)
@Controller('one-to-one')
export class OneToOneController {
  constructor(
    private readonly oneToOneService: OneToOneService,
    private readonly userfcmService: UserfcmtokenService,
    private readonly NotificationService: NotificationService,
  ) {}

  @Post()
  async create(
    @Body() createOneToOneDto: CreateOneToOneDto,
    @Req() request: Request,
  ) {
    createOneToOneDto.invitedBy = getUserId(request);

    const oneTooneRes = this.oneToOneService.create(createOneToOneDto);

    const findAllDevice = await this.userfcmService.findAll({
      where: `{ "userId": "${createOneToOneDto.meetWith}" }`,
    });

    const devices = findAllDevice?.data || [];

    if (!devices.length) {
      return oneTooneRes;
    }

    const title = 'one to one invitation';
    const body = `one to one invitation from ${getUserData(request).firstName} on ${createOneToOneDto.meetingDate} at ${createOneToOneDto.location}`;

    const notification = await this.NotificationService.create({
      title,
      message: body,
      Date: new Date(),
      senderId: getUserId(request),
      receiverId: createOneToOneDto.meetWith,
      createdBy: getUserId(request),
    });

    if (notification) {
      await Promise.all(
        devices.map(async (device) => {
          return this.NotificationService.notifyUser(
            device.fcmToken,
            title,
            body,
          );
        }),
      );
    }

    return oneTooneRes;
  }

  @Get()
  findAll(@Query() query: PaginationOptions<OneToOnes>) {
    return this.oneToOneService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oneToOneService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOneToOneDto: UpdateOneToOneDto,
    @Req() request: Request,
  ) {
    updateOneToOneDto.updatedBy = getUserId(request);
    return this.oneToOneService.update(id, updateOneToOneDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteOneToOneDto: UpdateOneToOneDto,
    @Req() request: Request,
  ) {
    deleteOneToOneDto.deletedBy = getUserId(request);
    return this.oneToOneService.remove(id, deleteOneToOneDto);
  }
}
