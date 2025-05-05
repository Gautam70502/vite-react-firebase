import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { BussinessType } from '../types/tyfcb.types';
import { Users } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/base/entity/base.entity';

@Entity()
export class Tyfcb extends BaseEntity {
  @Index()
  @Column({ type: 'uuid' })
  ThanksTo: string;

  @Column()
  reffreralAmount: number;

  @Column({ type: 'enum', enum: BussinessType })
  bussinessType: BussinessType;

  @Column({ nullable: true })
  comments: string;

  @Index()
  @Column({ type: 'uuid' })
  thanksBy: string;

  @ManyToOne(() => Users, (users) => users.tyfcb)
  @JoinColumn({ name: 'thanks_by' })
  user: Users;
}
