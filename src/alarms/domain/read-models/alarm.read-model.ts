export class AlarmReadModel {
  id: string;
  name: string;
  severity: string;
  triggeredAt: string;
  isAcknowledged: boolean;
  items: Array<{
    name: string;
    type: string;
  }>;
}
