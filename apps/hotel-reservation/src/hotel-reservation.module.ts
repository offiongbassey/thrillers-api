import { Module } from '@nestjs/common';
import { HotelReservationController } from './hotel-reservation.controller';
import { HotelReservationService } from './hotel-reservation.service';

@Module({
  imports: [],
  controllers: [HotelReservationController],
  providers: [HotelReservationService],
})
export class HotelReservationModule {}
