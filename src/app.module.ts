import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BookingController } from './booking/booking.controller';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), AuthModule, UsersModule, BookingModule],
  controllers: [AppController, BookingController],
  providers: [AppService],
})
export class AppModule {}
