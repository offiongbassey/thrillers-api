import { Test, TestingModule } from '@nestjs/testing';
import { HotelReservationController } from './hotel-reservation.controller';
import { HotelReservationService } from './hotel-reservation.service';

describe('HotelReservationController', () => {
  let hotelReservationController: HotelReservationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HotelReservationController],
      providers: [HotelReservationService],
    }).compile();

    hotelReservationController = app.get<HotelReservationController>(HotelReservationController);
  });

  describe('root', () => {
    it('should return "Welcome to Thrillers API!"', () => {
      expect(hotelReservationController.getHello()).toBe('Welcome to Thrillers API!');
    });
  });
});
