import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BookingService } from './booking.service';
import { toBookDto } from './dto/toBook.dto';
import { Booking } from 'src/entities/booking.entity';

@Controller('booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService) {}
    
    @Get()
  findOne(): Promise<Booking[]> {
    return this.bookingService.findFree()
  }

  @Post()
  create(@Body() toBookDto: toBookDto): Promise<Booking> {
    return this.bookingService.toBook(toBookDto);
  }
}
