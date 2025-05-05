import { BaseEntity } from 'src/base/entity/base.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class UserAnalytics extends BaseEntity {
  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @Column({ nullable: false, default: 0 })
  tyfcb: number;

  @Column({ nullable: false, default: 0 })
  totalRevenue: number;

  @Column({ nullable: false, default: 0 })
  oneToOnes: number;

  @Column({ nullable: false, default: 0 })
  referralGiven: number;

  @Column({ nullable: false, default: 0 })
  referralReceived: number;

  @Column({ nullable: false, default: 0 })
  visitor: number;

  @OneToOne(() => Users, (user) => user.analytics)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: Users;
}
