// Value Object (VO) originates from DDD.
// A VO is an immutable object that represents a descriptive aspect of the domain with no conceptual identity
// 2 VOs are equal if they have the same value, not necessarily being the same object.
// VO should be immutable and side effect free

export class AlarmSeverity {
  constructor(readonly value: 'critical' | 'high' | 'medium' | 'low') {}

  equals(severity: AlarmSeverity) {
    return this.value === severity.value;
  }
}
