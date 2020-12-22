import { ActionMeta } from 'redux-actions';



export type AsyncAction<Payload> = ActionMeta<Payload, AsyncActionMeta>;

export namespace AsyncAction {
  /**
   * Creates action type
   * from given action type and current async status
   * @param type
   * @param asyncStatus
   */
  export const createType = (type: string, asyncStatus: AsyncStatus): string => `${type}_${asyncStatus}`;

  export type CreateTypes = {
    VOID: string;
    PENDING: string;
    RESOLVED: string;
    REJECTED: string;
  };
  export const createTypes = (type: string): CreateTypes => ({
    VOID: createType(type, AsyncStatus.VOID),
    PENDING: createType(type, AsyncStatus.PENDING),
    RESOLVED: createType(type, AsyncStatus.RESOLVED),
    REJECTED: createType(type, AsyncStatus.REJECTED)
  });

  /**
   * Action init for async actions init
   * returns action marked as async
   * @param type
   * @param asyncStatus
   * @param payload
   */
  export function create<Payload>(type: string, asyncStatus: AsyncStatus, payload: Payload): AsyncAction<Payload> {
    const action = {
      type: createType(type, asyncStatus),
      payload,
      meta: {
        type,
        asyncStatus: asyncStatus
      }
    };

    return asyncStatus === AsyncStatus.REJECTED ? { ...action, error: true } : action;
  }
}
