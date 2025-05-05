import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { contactType } from '../../users/types/user.types';
import { Users } from '../../users/entities/user.entity';
import { BaseEntity } from 'src/base/entity/base.entity';

@Entity()
export class Contacts extends BaseEntity {
  @Index()
  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @Index()
  @Column({ type: 'varchar', nullable: false, unique: true, length: 10 })
  contact_no: string;

  @Column({ type: 'enum', enum: contactType })
  type: contactType;

  @ManyToOne(() => Users, (users) => users.contacts)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  users: Users;
}
