import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { BookingService } from './booking.service';
import { toBookDto } from './dto/toBook.dto';
import { Booking } from 'src/entities/booking.entity';
import { Rooms } from 'src/entities/rooms.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService) {}
    
    @Get()
    findOne(@Body() dateCand: any): Promise<Rooms[]> {
    return this.bookingService.findFree(dateCand)
    }

    @Post()
    create(@Body() toBookDto: toBookDto): Promise<Booking> {
    return this.bookingService.toBook(toBookDto);
}
}
