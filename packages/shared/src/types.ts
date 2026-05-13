export type Role = 'PASSENGER' | 'DRIVER' | 'ADMIN' | 'SUPPORT';
export type RideStatus = 'REQUESTED' | 'NEGOTIATING' | 'DRIVER_ASSIGNED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELED';

export interface PriceRecommendation {
  min: number;
  recommended: number;
  max: number;
}
