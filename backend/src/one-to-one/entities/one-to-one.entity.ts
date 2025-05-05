import { BaseEntity } from 'src/base/entity/base.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class OneToOnes extends BaseEntity {
  @Index()
  @Column({ type: 'uuid' })
  meetWith: string;

  @Column()
  location: string;

  @Column()
  topic: string;

  @Column({ type: 'timestamptz' })
  meetingDate: Date;

  @Index()
  @Column({ type: 'uuid' })
  invitedBy: string;

  @ManyToOne(() => Users, (users) => users.oneToOnesInvitationGiven)
  @JoinColumn({
    name: 'invitedBy',
    referencedColumnName: 'id',
  })
  InvitedUsers: Users;

  @ManyToOne(() => Users, (users) => users.oneToOnesInvitationReceive)
  @JoinColumn({
    name: 'meetWith',
    referencedColumnName: 'id',
  })
  meetUsers: Users;
}
