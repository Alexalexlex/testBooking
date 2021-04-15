import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rooms')
export class Rooms {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ type: 'varchar', length: 20, nullable: false })
  roomType: string;
  @Column({ type: 'varchar', length: 20, nullable: false })
  description: string;
  @Column({ type: 'int', width: 20, nullable: false })
  countOfAdults: number;
}