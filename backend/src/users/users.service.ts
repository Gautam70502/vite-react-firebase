import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Request } from 'express';
import { Company } from 'src/company/entity/company.entity';
import { Address } from 'src/address/entity/address.entity';
import { getUserId } from 'src/utils/helpers';
import { MailerService } from '@nestjs-modules/mailer';
import { UserfcmtokenService } from 'src/userfcmtoken/userfcmtoken.service';
import { NotificationService } from 'src/notification/notification.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { Members } from './entities/member.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,

    @InjectRepository(Members)
    private memberRepository: Repository<Members>,
    private mailService: MailerService,

    private userfcmService: UserfcmtokenService,
    private notificationService: NotificationService,
  ) {}

  async create(createUserDto: CreateUserDto, request: Request) {
    try {
      const {
        email,
        password,
        companies,
        addresses,
        chapterUsers,
        contacts,
        gainedBio,
        myBio,
        topProfile,
        ...rest
      } = createUserDto;

      const existingUser = await this.findOne({ email }, [
        'addresses',
        'contacts',
        'company',
        'chapterUsers',
      ]);
      if (existingUser) {
        throw new BadRequestException('User already exists');
      }

      const createdBy = getUserId(request);

      const hashedPassword = await bcrypt.hash(password, 10);

      const assignCreatedBy = <T extends { createdBy?: any }>(item: T) => {
        if (item) item.createdBy = createdBy;
        return item;
      };

      const preparedUser = {
        ...rest,
        email,
        password: hashedPassword,
        createdBy,
        company: companies?.map(assignCreatedBy),
        addresses: addresses?.map(assignCreatedBy),
        chapterUsers: chapterUsers?.map(assignCreatedBy),
        contacts: contacts?.map(assignCreatedBy),
        gainedbio: assignCreatedBy(gainedBio),
        mybio: assignCreatedBy(myBio),
        topprofile: assignCreatedBy(topProfile),
      };

      // console.log('preparedUser : ', preparedUser);

      const newUser = await this.userRepository.save(preparedUser);
      console.log('newUser : ', newUser);

      if (!newUser) {
        throw new BadRequestException('User not created');
      }

      for (const key of newUser.chapterUsers) {
        const findAllDevice = await this.userfcmService.findAll({
          where: `{ "chapterId": "${key.chapterId}" }`,
        });

        const devices = findAllDevice?.data || [];
        if (!devices.length) {
          return newUser;
        }

        const title = 'New Register';
        const body = `Welcome to chapter ${newUser.firstName}`;

        await Promise.all(
          devices.map(async (device) => {
            const notification = await this.notificationService.create({
              title,
              message: body,
              Date: new Date(),
              senderId: getUserId(request),
              receiverId: device.userId,
              createdBy: getUserId(request),
            });
            if (notification) {
              return this.notificationService.notifyUser(
                device.fcmToken,
                title,
                body,
              );
            }
          }),
        );
      }

      const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: 'New Registration',
        text: `welcome to gps,
        your credentials are as follows:
        email: ${email}
        password: ${password} 
        click here to login: ${process.env.FRONTEND_URL}
        `,
      };

      // await this.mailService.sendMail(mailOptions);

      return newUser;
    } catch (error) {
      throw new BadRequestException(error.message || 'Failed to create user');
    }
  }

  findAll() {
    try {
      return this.userRepository.find();
    } catch (error) {
      throw new BadRequestException(error.message || 'Failed to fetch users');
    }
  }

  async findOne(user: UpdateUserDto, relation?: string[]) {
    try {
      const existUser = await this.userRepository.findOne({
        where: user,
        relations: relation,
      });
      return existUser;
    } catch (error) {
      throw new BadRequestException(error.message || 'Failed to fetch user');
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto, request: Request) {
    try {
      const {
        companies,
        addresses,
        contacts,
        gainedBio,
        myBio,
        topProfile,
        ...rest
      } = updateUserDto;

      const typeCompanies = companies as DeepPartial<Company>[];
      const typeAddresses = addresses as DeepPartial<Address>[];
      const typeContacts = contacts as DeepPartial<Company>[];

      const user = await this.findOne({ id }, [
        'addresses',
        'contacts',
        'company',
        'gainedbio',
        'mybio',
        'topprofile',
      ]);

      if (!user) {
        throw new BadRequestException('User not found');
      }

      if (rest.firstName || rest.lastName) {
        throw new BadRequestException('Cannot update first name or last name');
      }

      if (rest.password) {
        rest.password = await bcrypt.hash(rest.password, 10);
      }

      const updateItems = <T extends { id?: string }>(
        existing: T[],
        updates: DeepPartial<T>[] = [],
        updatedBy: string,
      ): T[] => {
        return existing.map((item) => {
          const match = updates.find((u) => u.id === item.id);
          return match ? ({ ...item, ...match, updatedBy } as T) : item;
        });
      };

      if (addresses) {
        user.addresses = updateItems(
          user.addresses,
          typeAddresses,
          getUserId(request),
        );
      }

      if (companies) {
        user.company = updateItems(
          user.company,
          typeCompanies,
          getUserId(request),
        );
      }

      if (contacts) {
        user.contacts = updateItems(
          user.contacts,
          typeContacts,
          getUserId(request),
        );
      }

      const updateObject = <T extends { updatedBy?: string }>(
        original: T,
        updates: Partial<T> | undefined,
        updatedBy: string,
      ): T => {
        return updates ? { ...original, ...updates, updatedBy } : original;
      };

      user.gainedbio = updateObject(
        user.gainedbio,
        gainedBio,
        getUserId(request),
      );
      user.mybio = updateObject(user.mybio, myBio, getUserId(request));
      user.topprofile = updateObject(
        user.topprofile,
        topProfile,
        getUserId(request),
      );

      Object.assign(user, rest, { updatedBy: getUserId(request) });

      const updatedUser = await this.userRepository.save(user);

      if (!updatedUser) {
        throw new BadRequestException('User not updated');
      }

      return updatedUser;
    } catch (error) {
      throw new BadRequestException(error.message || 'Failed to update user');
    }
  }

  async delete(id: string, request: Request) {
    try {
      const updateUser = await this.update(
        id,
        { deletedBy: getUserId(request) },
        request,
      );

      if (!updateUser) {
        throw new BadRequestException('something went wrong');
      }
      await this.userRepository.softDelete(id);
      return updateUser;
    } catch (error) {
      throw new BadRequestException(error.message || 'Failed to delete user');
    }
  }

  async createMember(createMemberDto: CreateMemberDto) {
    try {
      const existUser = await this.memberRepository.findOne({
        where: { email: createMemberDto.email, isApproved: true },
      });
      if (existUser) {
        throw new BadRequestException('Member already exists');
      }
      createMemberDto.createdBy = 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6';
      const newUser = await this.memberRepository.save(createMemberDto);
      return newUser;
    } catch (error) {
      throw new BadRequestException(error.message || 'Failed to create user');
    }
  }
}
