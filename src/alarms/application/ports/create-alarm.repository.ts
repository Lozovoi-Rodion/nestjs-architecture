import { Alarm } from '../../domain/alarm';

// we could use interface as an abstraction. But class serves as an injestion token in nestjs
export abstract class CreateAlarmRepository {
  abstract save(alarm: Alarm): Promise<Alarm>;
}
