import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import {
  Referralhotness,
  ReferralReceiveStatus,
  ReferralType,
} from '../types/referral.types';
import { Users } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/base/entity/base.entity';

@Entity()
export class ReferralGiven extends BaseEntity {
  @Index()
  @Column({ type: 'uuid' })
  To: string;

  @Index()
  @Column({ type: 'uuid' })
  referralGivenBy: string;

  @Column({ type: 'varchar', length: 50 })
  referral: string;

  @Column({ type: 'simple-json', array: false })
  referralStatus: { give_card: boolean; should_be_called: boolean };

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'varchar', length: 10 })
  telephone: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ nullable: true })
  comments: string;

  @Column({ type: 'enum', enum: Referralhotness })
  referralHotness: Referralhotness;

  @ManyToOne(() => Users, (users) => users.referralsGiven)
  @JoinColumn({ name: 'referral_given_by' })
  user: Users;

  @Column({
    type: 'enum',
    enum: ReferralType,
    default: ReferralType.INSIDE,
  })
  referralType: ReferralType;

  @Column({
    type: 'enum',
    enum: ReferralReceiveStatus,
    default: ReferralReceiveStatus.NotContactedYet,
  })
  ReferralReceiveStatus: ReferralReceiveStatus;
}
