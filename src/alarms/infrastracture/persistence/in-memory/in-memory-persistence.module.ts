import { Module } from '@nestjs/common';
import { CreateAlarmRepository } from 'src/alarms/application/ports/create-alarm.repository';
import { InMemoryAlarmRepository } from './repositories/alarm.repository';
import { FindAlarmsRepository } from 'src/alarms/application/ports/find-alarm.repository';
import { UpsertMaterializedAlarmRepository } from 'src/alarms/application/ports/upsert-materialized-alarm.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: CreateAlarmRepository,
      useClass: InMemoryAlarmRepository,
    },
    {
      provide: FindAlarmsRepository,
      useClass: InMemoryAlarmRepository,
    },
    {
      provide: UpsertMaterializedAlarmRepository,
      useClass: InMemoryAlarmRepository,
    },
  ],
  exports: [
    CreateAlarmRepository,
    FindAlarmsRepository,
    UpsertMaterializedAlarmRepository,
  ],
})
export class InMemoryPersistenceModule {}
