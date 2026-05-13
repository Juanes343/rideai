# RideAI Architecture (MVP)

## Propuesta breve
Monorepo con 3 apps y paquetes compartidos. Backend modular con NestJS para dominio de movilidad, canal en tiempo real (WebSocket) para tracking/ofertas, y módulo IA desacoplado (reglas + LLM externo por API).

## Capas
1. **Client apps**: móvil pasajero/conductor, panel admin web.
2. **API Gateway (NestJS)**: auth, rides, offers, chat, safety, ai.
3. **Servicios**: pricing AI, safety analyzer, notifications.
4. **Datos**: PostgreSQL (core transaccional), Redis (tiempo real/colas/cache).

## Seguridad
- JWT + refresh token.
- Roles RBAC (PASSENGER/DRIVER/ADMIN/SUPPORT).
- Validación DTO + whitelist.
- Rate limit (pendiente fase 2).
- Auditoría de acciones admin.
- Emergencia sólo a contactos/autoridades configuradas explícitamente.

## WebSocket eventos clave
- `location:update`
- `ride:{id}:location`
- `ride:{id}:offer:new`
- `ride:{id}:safety:alert`

## Modo Ángel Guardián (MVP+)
- Activación manual.
- Monitoreo de desvío basado en ruta esperada vs GPS.
- Alertas discretas y bitácora SafetyEvents.
