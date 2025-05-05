import { BaseEntity } from 'src/base/entity/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TestimonialType } from '../types/testimonial.types';
import { Users } from 'src/users/entities/user.entity';

@Entity()
export class Testimonial extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  message: string;

  @Column({ type: 'uuid', nullable: false })
  to: string;

  @Column({ type: 'uuid', nullable: false })
  from: string;

  @Column({ type: 'enum', enum: TestimonialType, nullable: false })
  type: TestimonialType;

  @ManyToOne(() => Users, (users) => users.testimonialsGiven)
  @JoinColumn({ name: 'from', referencedColumnName: 'id' })
  testimonialGivers: Users;

  @ManyToOne(() => Users, (users) => users.testimonialsReceive)
  @JoinColumn({ name: 'to', referencedColumnName: 'id' })
  testimonialReceivers: Users;
}
