import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from 'src/entities/booking.entity';
import { Repository } from 'typeorm';
import { toBookDto } from './dto/toBook.dto';
import { Rooms } from 'src/entities/rooms.entity';

@Injectable()
export class BookingService {
    constructor(
        @InjectRepository(Booking)
        private bookingRepository: Repository<Booking>,
        @InjectRepository(Rooms)
        private roomsRepository: Repository<Rooms>
    ) {}

    async findFree(dateCand): Promise<Rooms[]> {
        const booking = await this.bookingRepository.find();
        const arrRoomsIds = [];
        if (booking.length) {
            booking.forEach((data) => {
              if (new Date(dateCand.checkInDate).getTime() >= new Date(data.checkInDate).getTime() &&
                  new Date(dateCand.checkInDate).getTime() <= new Date(data.checkOutDate).getTime() ||
                  new Date(dateCand.checkOutDate).getTime() <= new Date(data.checkOutDate).getTime() && 
                  new Date(dateCand.checkOutDate).getTime() >= new Date(data.checkInDate).getTime() ||
                  (new Date(dateCand.checkInDate).getTime() - new Date(data.checkInDate).getTime()) <= 0 &&
                  (new Date(dateCand.checkOutDate).getTime() - new Date(data.checkOutDate).getTime()) >= 0
                  ) {
                    arrRoomsIds.push(data.roomId)
              }
            })

            if (arrRoomsIds.length===0) {
                return await this.roomsRepository.find()
            }

            const allRooms = await this.roomsRepository.find();
            const freeRooms = [];
            arrRoomsIds.forEach((bookedId) => {
                delete allRooms[bookedId-1]
            })

            allRooms.forEach((room) => {
                if (room!==null) {
                    freeRooms.push(room)
                }
            })
            return freeRooms
            
        } else {
            return await this.roomsRepository.find()
        }
    }

    async toBook(toBook: toBookDto): Promise<Booking> {

        const { 
            checkInDate,
            checkOutDate,
            ...rest
         } = toBook

         const rooms = await this.roomsRepository.find()

         
             if (!rooms[toBook.roomId]) {
                 throw new HttpException(`This room doesn't exist`, HttpStatus.BAD_REQUEST);
             }
         
        const booking = {
            ...rest,
            checkInDate: new Date(toBook.checkInDate),
            checkOutDate: new Date(toBook.checkOutDate),
        }

        const reservation = await this.bookingRepository.save(booking);
        return reservation
    }
}
