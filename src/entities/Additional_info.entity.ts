import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Additional_info {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ type: 'varchar', nullable: false })
  middle_name: string;

}
