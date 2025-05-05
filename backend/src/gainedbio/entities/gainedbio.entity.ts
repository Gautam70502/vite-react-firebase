import { BaseEntity } from 'src/base/entity/base.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class GainedBio extends BaseEntity {
  @Column({ nullable: true })
  goal: string;

  @Column({ nullable: true })
  accomplishment: string;

  @Column({ nullable: true })
  intrest: string;

  @Column({ nullable: true })
  networks: string;

  @Column({ nullable: true })
  skills: string;

  @Index()
  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @OneToOne(() => Users, (user) => user.gainedbio)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: Users;
}
