import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/entities/booking.entity';

@Module({
  providers: [BookingService],
  controllers: [BookingController],
  imports: [TypeOrmModule.forFeature([Booking])],
  exports: [BookingService]
})
export class BookingModule {}
