import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from '../base-entity';

@Entity('users')
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 20, nullable: false })
  first_name: string;
  @Column({ type: 'varchar', length: 20, nullable: false })
  last_name: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;
}