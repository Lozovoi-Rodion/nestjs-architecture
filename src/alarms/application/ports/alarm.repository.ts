import { Alarm } from '../../domain/alarm';

// we could use interface as an abstraction. But class serves as an injestion token in nestjs
export abstract class AlarmRepository {
  abstract findAll(): Promise<Alarm[]>;
  abstract save(alarm: Alarm): Promise<Alarm>;
}
