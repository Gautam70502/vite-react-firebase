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
import { TyfcbService } from './tyfcb.service';
import { CreateTyfcbDto } from './dto/create-tyfcb.dto';
import { UpdateTyfcbDto } from './dto/update-tyfcb.dto';
import { Request } from 'express';
import { PaginationOptions } from 'src/base/types/base.types';
import { Tyfcb } from './entities/tyfcb.entity';
import { Role } from 'src/auth/types/auth.types';
import { Roles } from 'src/auth/decorator/auth.roles';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { NotificationService } from 'src/notification/notification.service';
import { UserfcmtokenService } from 'src/userfcmtoken/userfcmtoken.service';
import { getUserData, getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard, RoleGuard)
@Controller('tyfcb')
export class TyfcbController {
  constructor(
    private readonly tyfcbService: TyfcbService,
    private readonly NotificationService: NotificationService,
    private readonly userfcmService: UserfcmtokenService,
  ) {}

  @Post()
  async create(
    @Body() createTyfcbDto: CreateTyfcbDto,
    @Req() request: Request,
  ) {
    createTyfcbDto.thanksBy = getUserId(request);
    const tyfcbRes = await this.tyfcbService.create(createTyfcbDto);

    const findAllDevice = await this.userfcmService.findAll({
      where: `{ "userId": "${createTyfcbDto.ThanksTo}" }`,
    });

    const devices = findAllDevice?.data || [];

    if (!devices.length) {
      return tyfcbRes;
    }

    const data = getUserData(request);

    const title = 'Thanks for closing business';
    const body = `Thanks for closing business with an amount of ${tyfcbRes.reffreralAmount} on ${tyfcbRes.bussinessType} by ${data.firstName}`;

    const notification = await this.NotificationService.create({
      title,
      message: body,
      Date: new Date(),
      senderId: getUserId(request),
      receiverId: createTyfcbDto.ThanksTo,
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

    return tyfcbRes;
  }

  @Get()
  findAll(@Query() query: PaginationOptions<Tyfcb>) {
    return this.tyfcbService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tyfcbService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTyfcbDto: UpdateTyfcbDto,
    @Req() req: Request,
  ) {
    updateTyfcbDto.updatedBy = getUserId(req);
    return this.tyfcbService.update(id, updateTyfcbDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteTyfcbDto: UpdateTyfcbDto,
    @Req() req: Request,
  ) {
    deleteTyfcbDto.deletedBy = getUserId(req);
    return this.tyfcbService.remove(id, deleteTyfcbDto);
  }
}
