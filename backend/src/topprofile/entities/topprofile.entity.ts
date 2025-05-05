import { BaseEntity } from 'src/base/entity/base.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class TopProfile extends BaseEntity {
  @Column({ nullable: true })
  idealReferral: string;

  @Column({ nullable: true })
  topProduct: string;

  @Column({ nullable: true })
  topProblemSolved: string;

  @Column({ nullable: true })
  myFavouriteBNIStory: string;

  @Column({ nullable: true })
  myIdealReferralPartner: string;

  @Index()
  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @OneToOne(() => Users, (user) => user.topprofile)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: Users;
}
