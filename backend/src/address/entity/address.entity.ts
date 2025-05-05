import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { addressType } from '../../users/types/user.types';
import { Users } from '../../users/entities/user.entity';
import { BaseEntity } from 'src/base/entity/base.entity';

@Entity()
export class Address extends BaseEntity {
  @Index()
  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @Column({ nullable: false })
  addressLine: string;

  @Column({ type: 'citext', nullable: false })
  state: string;

  @Column({ type: 'citext', nullable: false })
  country: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  pincode: string;

  @Column({ type: 'enum', enum: addressType, nullable: false })
  type: addressType;

  @ManyToOne(() => Users, (users) => users.addresses)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  users: Users;
}
