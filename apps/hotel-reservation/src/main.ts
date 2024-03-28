import { NestFactory } from '@nestjs/core';
import { HotelReservationModule } from './hotel-reservation.module';

async function bootstrap() {
  const app = await NestFactory.create(HotelReservationModule);
  await app.listen(3000);
}
bootstrap();
