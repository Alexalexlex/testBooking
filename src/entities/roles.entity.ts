import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('roles')
export class Roles {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ type: 'varchar', nullable: false })
  role: string;
}
