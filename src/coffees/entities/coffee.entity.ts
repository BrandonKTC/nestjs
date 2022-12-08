import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // sql table === 'coffee
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() // each column not nullable is require by default
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}
