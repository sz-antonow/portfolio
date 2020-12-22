import { AsyncStatus } from 'common/src/enum';
import { AsyncState } from 'common/src/store/async/AsyncState';

export const axiosError = {
  config: {},
  name: '',
  message: '',
  response: {
    status: 409,
    statusText: 'Conflict',
    data: {
      message: 'Custom backend error message'
    },
    headers: {},
    config: {}
  },
  isAxiosError: true,
  toJSON: () => {
    return {};
  }
};

export const asyncStateResolved: AsyncState<string[]> = {
  status: AsyncStatus.RESOLVED,
  data: ['foo', 'bar']
};

export const asyncStatePending: AsyncState<string[]> = {
  status: AsyncStatus.PENDING,
  data: []
};

export const asyncStateRejected: AsyncState<string[]> = {
  status: AsyncStatus.REJECTED,
  data: [],
  error: axiosError
};
