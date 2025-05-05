import { Column, Entity, Index, OneToMany, OneToOne } from 'typeorm';
import { Gender, MemberShipStatus } from '../types/user.types';
import { Address } from '../../address/entity/address.entity';
import { Contacts } from '../../contact/entity/contact.entity';
import { Company } from '../../company/entity/company.entity';
import { Role } from 'src/auth/types/auth.types';
import { Visitor } from 'src/visitor/entities/visitor.entity';
import { ReferralGiven } from 'src/referralgiven/entities/referralgiven.entity';
import { Tyfcb } from 'src/tyfcb/entities/tyfcb.entity';
import { Ceu } from 'src/ceu/entities/ceu.entity';
import { BaseEntity } from 'src/base/entity/base.entity';
import { GainedBio } from 'src/gainedbio/entities/gainedbio.entity';
import { Mybio } from 'src/user-bio/entities/user-bio.entity';
import { TopProfile } from 'src/topprofile/entities/topprofile.entity';
import { ChaptersUsersMeeting } from 'src/chapters-users-meeting/entities/chapters-users-meeting.entity';
import { ChapterUsers } from 'src/chapters_users/entities/chapters_users.entity';
import { UserFcmToken } from '../../userfcmtoken/entities/userFcmToken.entity';
import { Notification } from 'src/notification/entities/notification.entity';
import { OneToOnes } from 'src/one-to-one/entities/one-to-one.entity';
import { Testimonial } from 'src/testimonial/entities/testimonial.entity';
import { UserAnalytics } from 'src/user-analytics/entities/user-analytic.entity';
import { BusinessReference } from './business-reference.entity';

@Index(['firstName', 'lastName', 'email'], { unique: true })
@Entity()
export class Users extends BaseEntity {
  @Column({ nullable: false, type: 'citext' })
  firstName: string;

  @Column({ nullable: false, type: 'citext' })
  lastName: string;

  @Column({ nullable: false, type: 'varchar', length: 20, unique: true })
  userName: string;

  @Index()
  @Column({ unique: true, nullable: false, type: 'varchar' })
  email: string;

  @Column({ type: 'timestamptz', nullable: false })
  renewalDueDate: Date;

  @Column({ type: 'varchar' })
  password?: string;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @Column({ nullable: true })
  profile: string;

  @Column({ nullable: true })
  language: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  timezone: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  socialMediaLink: string;

  @Column({
    type: 'enum',
    enum: MemberShipStatus,
    default: MemberShipStatus.DEACTIVE,
  })
  membershipStatus: MemberShipStatus;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role;

  @Column({ default: false, type: 'boolean', nullable: true })
  isActive: boolean;

  @OneToMany(() => Address, (address) => address.users, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  addresses: Address[];

  @OneToMany(() => Contacts, (contacts) => contacts.users, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  contacts: Contacts[];

  @OneToMany(() => Company, (Company) => Company.users, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  company: Company[];

  @OneToOne(() => Mybio, (bio) => bio.user, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  mybio: Mybio;

  @OneToOne(() => TopProfile, (bio) => bio.user, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  topprofile: TopProfile;

  @OneToOne(() => GainedBio, (bio) => bio.user, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  gainedbio: GainedBio;

  @OneToMany(() => Visitor, (visitor) => visitor.user, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  visitors: Visitor;

  @OneToMany(() => ChapterUsers, (chapterUsers) => chapterUsers.user, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  chapterUsers: ChapterUsers[];

  @OneToMany(
    () => ChaptersUsersMeeting,
    (ChaptersUsersMeeting) => ChaptersUsersMeeting.user,
    {
      cascade: ['insert', 'update', 'soft-remove'],
    },
  )
  ChaptersUsersMeeting: ChaptersUsersMeeting[];

  @OneToMany(() => ReferralGiven, (Referral) => Referral.user, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  referralsGiven: ReferralGiven[];

  @OneToMany(() => Tyfcb, (Tyfcb) => Tyfcb.user, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  tyfcb: Tyfcb[];

  @OneToMany(() => Ceu, (Ceu) => Ceu.user, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  ceus: Ceu[];

  @OneToMany(() => UserFcmToken, (UserFcmToken) => UserFcmToken.user, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  fcmTokens: UserFcmToken[];

  @OneToMany(() => Notification, (Notification) => Notification.sender, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  notificationsSenders: Notification[];

  @OneToMany(() => Notification, (Notification) => Notification.receiver, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  notificationsReceivers: Notification[];

  @OneToMany(() => ChapterUsers, (ChapterUsers) => ChapterUsers.user, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  ChapterUsers: ChapterUsers[];

  @OneToMany(() => OneToOnes, (onetoOnes) => onetoOnes.InvitedUsers, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  oneToOnesInvitationGiven: OneToOnes[];

  @OneToMany(() => OneToOnes, (onetoOnes) => onetoOnes.meetUsers, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  oneToOnesInvitationReceive: OneToOnes[];

  @OneToMany(
    () => Testimonial,
    (Testimonial) => Testimonial.testimonialGivers,
    {
      cascade: ['insert', 'update', 'soft-remove'],
    },
  )
  testimonialsGiven: Testimonial[];

  @OneToMany(
    () => Testimonial,
    (Testimonial) => Testimonial.testimonialReceivers,
    {
      cascade: ['insert', 'update', 'soft-remove'],
    },
  )
  testimonialsReceive: Testimonial[];

  @OneToOne(() => UserAnalytics, (UserAnalytics) => UserAnalytics.user, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  analytics: UserAnalytics;
}
