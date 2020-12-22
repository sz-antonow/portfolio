import { AsyncStatus } from 'common/src/enum';
import { AsyncAction } from 'common/src/store/async';
import { AsyncActionCreator } from 'common/src/store/async';

describe('AsyncActionCreator', () => {
  it('should return PENDING action from async actions init', () => {
    const type = 'ACTION_TYPE';
    const asyncActionsCreator = AsyncActionCreator.init(type);
    const pendingAction = AsyncAction.create(type, AsyncStatus.PENDING, null);

    expect(asyncActionsCreator.pending()).toEqual(pendingAction);
  });

  it('should return RESOLVED action from async actions init', () => {
    const type = 'ACTION_TYPE';
    const asyncActionsCreator = AsyncActionCreator.init(type);
    const payload = ['foo'];
    const resolvedAction = AsyncAction.create(type, AsyncStatus.RESOLVED, payload);

    expect(asyncActionsCreator.resolved(payload)).toEqual(resolvedAction);
  });

  it('should return rejected action from async actions init', () => {
    const type = 'ACTION_TYPE';
    const asyncActionsCreator = AsyncActionCreator.init(type);
    const rejectedAction = AsyncAction.create(type, AsyncStatus.REJECTED, new Error());

    expect(asyncActionsCreator.rejected(new Error())).toEqual(rejectedAction);
  });

  it('should create async actions creators', () => {
    const type = 'ACTION_TYPE';
    const asyncActionsCreator = AsyncActionCreator.init(type);

    expect(asyncActionsCreator).toMatchSnapshot();
  });
});
