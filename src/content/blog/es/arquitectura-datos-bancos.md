---
title: 'Lo que los Bancos me Enseñaron sobre Modelar Riesgo'
description: 'Lecciones del diseño de modelos de datos para instituciones financieras que todo desarrollador debería conocer'
pubDate: 'Nov 10 2024'
heroImage: '/blog-placeholder-2.jpg'
---

Trabajar en el sector bancario fue una experiencia que transformó completamente mi perspectiva sobre la arquitectura de datos. Durante mis años diseñando sistemas para instituciones financieras, aprendí lecciones valiosas que van mucho más allá del mundo bancario y se aplican a cualquier sistema crítico.

## El contexto: datos que no pueden fallar

En el sector financiero, un error en los datos no es solo un bug molesto; puede significar pérdidas millonarias, violaciones regulatorias o la pérdida de confianza de los clientes. Este contexto te obliga a pensar diferente sobre cada decisión de diseño.

### Las tres reglas de oro

#### 1. **Inmutabilidad como primera línea de defensa**

En lugar de actualizar registros existentes, aprendí a crear nuevos registros que referencian a los anteriores. Esto no solo preserva un audit trail completo, sino que hace que los rollbacks sean triviales.

```sql
-- En lugar de:
UPDATE transactions SET amount = 1500 WHERE id = 123;

-- Hacer:
INSERT INTO transaction_adjustments (
  original_transaction_id, 
  new_amount, 
  reason, 
  created_by
) VALUES (123, 1500, 'Correction', 'user_id');
```

#### 2. **Validación en múltiples capas**

Los bancos no confían en una sola validación. Implementan controles en:
- El frontend (UX)
- El API gateway (Seguridad)
- La lógica de negocio (Reglas)
- La base de datos (Consistencia)
- Los procesos batch nocturnos (Reconciliación)

#### 3. **Separación de concerns extrema**

Un sistema bancario típico separa:
- **Capture**: Recepción de transacciones
- **Processing**: Validación y enriquecimiento
- **Settlement**: Ejecución final
- **Reporting**: Consultas y análisis

Cada etapa tiene su propia base de datos, sus propias reglas, y puede fallar independientemente sin afectar a las demás.

## Aplicando estas lecciones en startups

### Caso práctico: Agéndalo.io

Cuando construíamos Agéndalo.io, apliqué estos principios adaptándolos a nuestro contexto:

**Immutabilidad selectiva**: No todos los datos necesitan ser inmutables, pero identificamos los críticos:
- Pagos y facturación
- Eventos de audit de usuarios
- Cambios en configuraciones de negocio

**Validación pragmática**: Implementamos validación en capas donde importaba:
- Disponibilidad de citas (múltiples checks)
- Procesamiento de pagos (validación bancaria)
- Notificaciones críticas (confirmación de entrega)

**Separación inteligente**: Dividimos el sistema en dominios claros:
- **Scheduling**: Manejo de citas y disponibilidad
- **Billing**: Facturación y pagos
- **Communications**: Notificaciones y mensajería
- **Analytics**: Reportes y métricas

## Los antipatrones que evité

### 1. **El "todo en una tabla"**
Es tentador crear una tabla omnipotente que almacene toda la información de una entidad. Los bancos me enseñaron que es mejor tener 10 tablas especializadas que una tabla con 50 columnas.

### 2. **Transacciones muy largas**
Una transacción que toca múltiples dominios es una bomba de tiempo. Aprendí a preferir eventual consistency sobre strong consistency cuando es posible.

### 3. **Borrado físico**
Nunca, jamás, elimines datos financieros. Esta regla la extendí a cualquier dato que tenga implicaciones legales o de auditoría.

## Herramientas que marcan la diferencia

### PostgreSQL como columna vertebral
Para sistemas críticos, PostgreSQL ha sido mi elección por:
- **MVCC**: Concurrencia sin bloqueos
- **ACID completo**: Transacciones confiables
- **JSON nativo**: Flexibilidad con estructura
- **Extensiones**: PostGIS, TimescaleDB según necesidad

### Event sourcing para audit trails
```typescript
interface DomainEvent {
  eventId: string;
  aggregateId: string;
  eventType: string;
  eventData: any;
  timestamp: Date;
  userId: string;
}

// Cada cambio genera un evento
const events: DomainEvent[] = [
  {
    eventId: uuid(),
    aggregateId: 'appointment-123',
    eventType: 'AppointmentScheduled',
    eventData: { dateTime: '2024-11-15T10:00:00Z', clientId: 'client-456' },
    timestamp: new Date(),
    userId: 'user-789'
  }
];
```

## Reflexiones finales

El sector bancario me enseñó que la arquitectura de datos no es solo sobre performance o elegancia técnica; es sobre **confiabilidad, trazabilidad y resiliencia**. Estas lecciones han sido invaluables en todos los proyectos posteriores.

La próxima vez que diseñes un sistema, pregúntate: "¿Qué pasaría si este fuera un sistema bancario?" Probablemente encuentres oportunidades para hacerlo más robusto.

---

*¿Has trabajado con sistemas críticos? Me encantaría conocer tu experiencia. Escríbeme en [Twitter](https://twitter.com/_misaelabanto) o [LinkedIn](https://linkedin.com/in/misaelabanto).* 