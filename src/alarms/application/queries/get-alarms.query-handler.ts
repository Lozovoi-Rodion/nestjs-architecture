import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAlarmsQuery } from './get-alarms.query';
import { Alarm } from 'src/alarms/domain/alarm';
import { FindAlarmsRepository } from '../ports/find-alarm.repository';
import { AlarmReadModel } from 'src/alarms/domain/read-models/alarm.read-model';

@QueryHandler(GetAlarmsQuery)
export class GetAlarmsQueryHandler
  implements IQueryHandler<GetAlarmsQuery, AlarmReadModel[]>
{
  constructor(private readonly alarmRepository: FindAlarmsRepository) {}

  async execute(query: GetAlarmsQuery): Promise<AlarmReadModel[]> {
    console.log(`${query} not in use`);
    return this.alarmRepository.findAll();
  }
}
