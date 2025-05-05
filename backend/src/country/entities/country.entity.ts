import { BaseEntity } from 'src/base/entity/base.entity';
import { Region } from 'src/region/entities/region.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Country extends BaseEntity {
  @Column({ unique: true, type: 'varchar' })
  name: string;

  @OneToMany(() => Region, (region) => region.country, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  regions: Region[];
}
