import { Body, Controller, Post } from '@nestjs/common';

@Controller('ai')
export class AiController {
  @Post('price-recommendation')
  recommendPrice(@Body() body: { km: number; minutes: number; demandLevel: number; riskLevel: number }) {
    const base = body.km * 1200 + body.minutes * 120;
    const demand = 1 + body.demandLevel * 0.1;
    const risk = 1 + body.riskLevel * 0.08;
    const recommended = Math.round(base * demand * risk);
    return { min: Math.round(recommended * 0.9), recommended, max: Math.round(recommended * 1.15) };
  }

  @Post('assistant')
  assistant(@Body() body: { message: string; context?: Record<string, unknown> }) {
    return { reply: `Entendido. Te ayudo con: ${body.message}`, actions: ['RECOMMEND_PRICE', 'SHARE_TRIP'] };
  }
}
