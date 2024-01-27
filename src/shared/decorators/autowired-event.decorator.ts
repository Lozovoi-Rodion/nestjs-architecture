import { EventClsRegistry } from '../infrastracture/event-store/event-cls.registry';

export const AutowiredEvent: ClassDecorator = (target: any) => {
  EventClsRegistry.add(target);
};
