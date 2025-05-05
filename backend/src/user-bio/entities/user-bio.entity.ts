import { BaseEntity } from 'src/base/entity/base.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Mybio extends BaseEntity {
  @Column({ nullable: true })
  yearInBussiness: number;

  @Column({ nullable: true })
  previousTypesOfJobs: string;

  @Column({ nullable: true })
  hobbies: string;

  @Column({ nullable: true })
  cityOfResidance: string;

  @Column({ nullable: true })
  yearsInThatCity: string;

  @Column({ nullable: true })
  myBurningDesireIsTo: string;

  @Column({ nullable: true })
  somethingNoOneHereKnowsAboutMe: string;

  @Column({ nullable: true })
  myKeyToSuccess: string;

  @Index()
  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @OneToOne(() => Users, (user) => user.mybio)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: Users;
}
