import { Test, TestingModule } from '@nestjs/testing';
import { FlightBookingController } from './flight-booking.controller';
import { FlightBookingService } from './flight-booking.service';

describe('FlightBookingController', () => {
  let flightBookingController: FlightBookingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FlightBookingController],
      providers: [FlightBookingService],
    }).compile();

    flightBookingController = app.get<FlightBookingController>(FlightBookingController);
  });

  describe('root', () => {
    it('should return "Welcome to Thrillers API!"', () => {
      expect(flightBookingController.getHello()).toBe('Welcome to Thrillers API!');
    });
  });
});
