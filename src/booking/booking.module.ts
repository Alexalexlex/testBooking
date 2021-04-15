import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/entities/booking.entity';
import { Rooms } from 'src/entities/rooms.entity';

@Module({
  providers: [BookingService],
  controllers: [BookingController],
  imports: [TypeOrmModule.forFeature([Booking, Rooms])],
  exports: [BookingService]
})
export class BookingModule {}
