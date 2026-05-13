import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true, namespace: '/rides' })
export class RideGateway {
  @WebSocketServer() server!: Server;

  @SubscribeMessage('location:update')
  handleLocationUpdate(client: any, payload: { rideId: string; lat: number; lng: number }) {
    client.broadcast.emit(`ride:${payload.rideId}:location`, payload);
  }
}
