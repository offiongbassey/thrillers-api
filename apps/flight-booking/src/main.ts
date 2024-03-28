import { NestFactory } from '@nestjs/core';
import { FlightBookingModule } from './flight-booking.module';

async function bootstrap() {
  const app = await NestFactory.create(FlightBookingModule);
  await app.listen(3000);
}
bootstrap();
