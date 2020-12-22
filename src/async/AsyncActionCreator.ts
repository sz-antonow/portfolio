import { AsyncStatus } from 'common/src/enum';
import { AsyncAction } from 'common/src/store/async/AsyncAction';

export type AsyncActionCreator<Payload = any> = Readonly<{
  pending: (payload?: Payload) => AsyncAction<Payload>;
  resolved: (payload?: Payload) => AsyncAction<Payload>;
  rejected: (error: Payload) => AsyncAction<Payload>;
}>;

export namespace AsyncActionCreator {
  /**
   * Creates action creators
   * for all async statuses
   * @param type
   */
  export function init<Payload>(type: string): AsyncActionCreator<Payload> {
    return {
      pending: (payload: Payload = null) => AsyncAction.create<Payload>(type, AsyncStatus.PENDING, payload),
      resolved: (payload: Payload) => AsyncAction.create<Payload>(type, AsyncStatus.RESOLVED, payload),
      rejected: (error: Payload) => AsyncAction.create<Payload>(type, AsyncStatus.REJECTED, error)
    };
  }
}
