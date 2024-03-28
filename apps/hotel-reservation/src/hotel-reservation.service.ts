import { Injectable } from '@nestjs/common';

@Injectable()
export class HotelReservationService {
  getHello(): string {
    return 'Welcome to Thrillers API!';
  }
}
