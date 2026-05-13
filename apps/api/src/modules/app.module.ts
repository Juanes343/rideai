import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { RidesController } from './rides/rides.controller';
import { AiController } from './ai/ai.controller';
import { RideGateway } from './rides/rides.gateway';

@Module({
  controllers: [AuthController, RidesController, AiController],
  providers: [RideGateway],
})
export class AppModule {}
