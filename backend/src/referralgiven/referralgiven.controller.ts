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
import { ReferralGivenService } from './referralgiven.service';
import { CreateReferralGivenDto } from './dto/create-referral-given.dto';
import { UpdateReferralGivenDto } from './dto/update-referral-given.dto';
import { Request } from 'express';
import { PaginationOptions } from 'src/base/types/base.types';
import { ReferralGiven } from './entities/referralgiven.entity';
import { Roles } from 'src/auth/decorator/auth.roles';
import { Role } from 'src/auth/types/auth.types';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { UserfcmtokenService } from 'src/userfcmtoken/userfcmtoken.service';
import { NotificationService } from 'src/notification/notification.service';
import { getUserData, getUserId } from 'src/utils/helpers';

@UseGuards(AuthGuard, RoleGuard)
@Controller('referral')
export class ReferralGivenController {
  constructor(
    private readonly referralService: ReferralGivenService,
    private readonly userfcmService: UserfcmtokenService,
    private readonly notificationService: NotificationService,
  ) {}

  @Post()
  async create(
    @Body() createReferralDto: CreateReferralGivenDto,
    @Req() request: Request,
  ) {
    createReferralDto.referralGivenBy = getUserId(request);

    const referralGiven = await this.referralService.create(createReferralDto);

    const findAllDevice = await this.userfcmService.findAll({
      where: `{ "userId": "${createReferralDto.To}" }`,
    });

    const devices = findAllDevice?.data || [];

    if (!devices.length) {
      return referralGiven;
    }

    const data = getUserData(request);
    const title = 'refferal given';
    const body = `your refferal given by ${data.firstName} to ${createReferralDto.referral} `;

    const notification = await this.notificationService.create({
      title,
      message: body,
      Date: new Date(),
      senderId: getUserId(request),
      receiverId: createReferralDto.To,
      createdBy: getUserId(request),
    });

    if (notification) {
      await Promise.all(
        devices.map(async (device) => {
          return this.notificationService.notifyUser(
            device.fcmToken,
            title,
            body,
          );
        }),
      );
    }

    return referralGiven;
  }

  @Get()
  findAll(@Query() query: PaginationOptions<ReferralGiven>) {
    return this.referralService.findAll(query);
  }

  @Get('received')
  findAllReceived(
    @Query() query: PaginationOptions<ReferralGiven>,
    @Req() request: Request,
  ) {
    const updateQuery = {
      ...query,
      To: getUserId(request),
    };

    return this.referralService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.referralService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReferralGivenDto: UpdateReferralGivenDto,
    @Req() request: Request,
  ) {
    updateReferralGivenDto.updatedBy = getUserId(request);
    return this.referralService.update(id, updateReferralGivenDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body() deleteReferralGivenDto: UpdateReferralGivenDto,
    @Req() request: Request,
  ) {
    deleteReferralGivenDto.deletedBy = getUserId(request);
    return this.referralService.remove(id, deleteReferralGivenDto);
  }

  @Get('tracking/report')
  trackingReport(@Query() query: PaginationOptions<ReferralGiven>) {
    return this.referralService.findAll(query);
  }
}
