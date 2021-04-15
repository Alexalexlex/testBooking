import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from 'src/entities/booking.entity';
import { Repository } from 'typeorm';
import { toBookDto } from './dto/toBook.dto';

@Injectable()
export class BookingService {
    constructor(
        @InjectRepository(Booking)
        private bookingRepository: Repository<Booking>
    ) {}

    async findFree(): Promise<Booking[]> {
        return await this.bookingRepository.find();
    }

    async toBook(toBook: toBookDto): Promise<Booking> {

        const { 
            checkInDate,
            checkOutDate,
            ...rest
         } = toBook

        const booking = {
            ...rest,
            checkInDate: new Date(toBook.checkInDate),
            checkOutDate: new Date(toBook.checkOutDate),
        }

        console.log(booking);
        const reservation = await this.bookingRepository.save(booking);
        return reservation
    }
}
