import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../base-entity';

@Entity('booking')
export class Booking extends BaseEntity {
  @Column({ type: 'int', nullable: false })
  roomId: number;
  @Column({ type: 'date', nullable: false })
  checkInDate: Date;
  @Column({ type: 'date', nullable: false })
  checkOutDate: Date;
  @Column({ type: 'boolean', width: 20, nullable: false })
  isPaid: boolean;
  @Column({ type: 'int', nullable: false })
  userId: number;
}