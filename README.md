# RideAI Monorepo (MVP)

Plataforma de movilidad tipo Uber/inDrive con diferenciador de IA y seguridad.

## Estructura
- `apps/api`: Backend NestJS + Prisma + WebSocket
- `apps/mobile`: App Expo React Native (pasajero/conductor)
- `apps/admin`: Panel admin Next.js
- `packages/shared`: Tipos/contratos compartidos
- `docs`: Arquitectura, roadmap, flujos

## Inicio rápido
1. Copia variables:
   ```bash
   cp .env.example .env
   ```
2. API:
   ```bash
   cd apps/api
   npm install
   npx prisma generate
   npm run start:dev
   ```
3. Mobile:
   ```bash
   cd apps/mobile
   npm install
   npm run start
   ```
4. Admin:
   ```bash
   cd apps/admin
   npm install
   npm run dev
   ```

## MVP incluido
- Auth JWT
- Usuarios pasajero/conductor/admin
- Solicitud de viaje
- Ofertas / contraofertas
- Tracking vía WebSocket
- Chat base
- Recomendación de precio IA (reglas)
- Asistente IA por texto

