import { Controller, Get } from '@nestjs/common';
import { HotelReservationService } from './hotel-reservation.service';

@Controller()
export class HotelReservationController {
  constructor(private readonly hotelReservationService: HotelReservationService) {}

  @Get()
  getHello(): string {
    return this.hotelReservationService.getHello();
  }
}
