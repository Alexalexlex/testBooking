import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.entity';

@Entity('roles')
export class Roles {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ type: 'varchar', nullable: false })
  role: string;
}
