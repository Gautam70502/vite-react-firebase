import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Users } from '../../users/entities/user.entity';
import { BaseEntity } from 'src/base/entity/base.entity';

@Entity()
export class Company extends BaseEntity {
  @Index()
  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @Column({ nullable: false, type: 'citext' })
  name: string;

  @Column({ nullable: true })
  logo: string;

  @Column({ nullable: true })
  industry: string;

  @Column({ nullable: true })
  classification: string;

  @Column({ nullable: true })
  fax: string;

  @Column({ type: 'bigint', nullable: true })
  tollfree: number;

  @Index()
  @Column({ type: 'varchar', length: 30, nullable: false, unique: true })
  gstNumber: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  gstRegisterState: string;

  @Column({ nullable: true })
  bussinessSummry: string;

  @Column({ nullable: true })
  keyword: string;

  @ManyToOne(() => Users, (users) => users.company)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  users: Users;
}
