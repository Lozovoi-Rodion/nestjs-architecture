import { Module } from '@nestjs/common';
import { OrmAlarmPersistenceModule } from './persistence/orm/orm-persistence.module';
import { InMemoryPersistenceModule } from './persistence/in-memory/in-memory-persistence.module';

@Module({})
export class AlarmsInfrastructureModule {
  static use(driver: 'orm' | 'in-memory') {
    const persistenceModel =
      driver === 'orm' ? OrmAlarmPersistenceModule : InMemoryPersistenceModule;

    return {
      module: AlarmsInfrastructureModule,
      imports: [persistenceModel],
      exports: [persistenceModel],
    };
  }
}
