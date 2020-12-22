import { AsyncStatus } from 'common/src/enum';
import { AsyncAction } from './AsyncAction';

describe('AsyncAction', () => {
  it('should create type with current async status', () => {
    const type = 'TYPE';

    expect(AsyncAction.createType(type, AsyncStatus.PENDING)).toMatchSnapshot();
    expect(AsyncAction.createType(type, AsyncStatus.RESOLVED)).toMatchSnapshot();
    expect(AsyncAction.createType(type, AsyncStatus.REJECTED)).toMatchSnapshot();
  });

  it('should create action marked as async', () => {
    const type = 'TYPE';
    const asyncType = AsyncStatus.PENDING;
    const payload = ['foo'];
    const action = AsyncAction.create(type, asyncType, payload);

    expect(action.meta).toHaveProperty('type');
    expect(action.meta).toHaveProperty('asyncStatus');
  });

  it('should create resolved action with given payload', () => {
    const type = 'TYPE';
    const asyncType = AsyncStatus.RESOLVED;
    const payload = ['foo'];
    const action = AsyncAction.create(type, asyncType, payload);

    expect(action.payload).toEqual(payload);
  });

  it('should create pending action', () => {
    const type = 'TYPE';
    const asyncType = AsyncStatus.PENDING;
    const action = AsyncAction.create(type, asyncType, null);

    expect(action).toMatchSnapshot();
  });

  it('should create resolved action', () => {
    const type = 'TYPE';
    const asyncType = AsyncStatus.RESOLVED;
    const payload = ['foo'];
    const action = AsyncAction.create(type, asyncType, payload);

    expect(action).toMatchSnapshot();
  });

  it('should create rejected action', () => {
    const type = 'TYPE';
    const asyncType = AsyncStatus.REJECTED;
    const payload = new Error('Error message');
    const action = AsyncAction.create(type, asyncType, payload);

    expect(action).toMatchSnapshot();
  });
});
