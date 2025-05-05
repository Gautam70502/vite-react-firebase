import { BaseEntity } from 'src/base/entity/base.entity';
import { City } from 'src/city/entities/city.entity';
import { Country } from 'src/country/entities/country.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Region extends BaseEntity {
  @Column({ unique: true, type: 'varchar' })
  name: string;

  @Column({ nullable: false })
  countryId: string;

  @ManyToOne(() => Country, (country) => country.regions)
  @JoinColumn({ name: 'country_id', referencedColumnName: 'id' })
  country: Country;

  @OneToMany(() => City, (city) => city.region, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  cities: City[];
}
