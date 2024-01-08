import { Alarm } from '../alarm';

// Exist 2 types of events:
// Domain events - relevant to domain module, represents changes occured to the domain
// Integration events - used for cross service communication
export class AlarmCreatedEvent {
  constructor(public readonly alarm: Alarm) {}
}
