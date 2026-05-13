import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { IsNumber, IsOptional, IsString } from 'class-validator';

class CreateRideDto {
  @IsString() origin!: string;
  @IsString() destination!: string;
  @IsNumber() suggestedPrice!: number;
  @IsOptional() @IsString() notes?: string;
}

@Controller('rides')
export class RidesController {
  @Post()
  createRide(@Body() dto: CreateRideDto) {
    return { id: 'ride_1', status: 'REQUESTED', ...dto };
  }

  @Get(':id/offers')
  getRideOffers(@Param('id') id: string) {
    return { rideId: id, offers: [{ driverId: 'd1', amount: 21000 }, { driverId: 'd2', amount: 23000 }] };
  }

  @Patch(':id/accept-offer/:driverId')
  acceptOffer(@Param('id') id: string, @Param('driverId') driverId: string) {
    return { rideId: id, driverId, status: 'DRIVER_ASSIGNED' };
  }
}
