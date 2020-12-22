import { AsyncStatus } from 'common/src/enum';
import { AsyncState } from 'common/src/store/async/AsyncState';
import { AsyncSelector } from './AsyncSelector';
import { asyncStatePending, asyncStateRejected, asyncStateResolved, axiosError } from './AsyncSelector.mock';

describe('AsyncSelector', () => {
  const selectedResolvedAsyncDomain = () => asyncStateResolved;
  const selectedPendingAsyncDomain = () => asyncStatePending;
  const selectedRejectedAsyncDomain = () => asyncStateRejected;

  type State = {
    resolved: AsyncState<string[]>;
    pending: AsyncState<string[]>;
    rejected: AsyncState<string[]>;
  };
  let state: State;

  beforeEach(() => {
    state = {
      resolved: asyncStateResolved,
      pending: asyncStatePending,
      rejected: asyncStateRejected
    };
  });

  it('should select async state data', () => {
    const selectedData = AsyncSelector.selectDomainData(selectedResolvedAsyncDomain)(state);

    expect(selectedData).toEqual(asyncStateResolved.data);
  });

  it('should select async state status', () => {
    const selectedStatus = AsyncSelector.selectDomainStatus(selectedResolvedAsyncDomain)(state);

    expect(selectedStatus).toEqual(AsyncStatus.RESOLVED);
  });

  it('should select pending async state status', () => {
    const status = AsyncSelector.selectDomainStatus(selectedPendingAsyncDomain)(state);

    expect(status).toEqual(AsyncStatus.PENDING);
  });

  it('should select rejected async state status', () => {
    const status = AsyncSelector.selectDomainStatus(selectedRejectedAsyncDomain)(state);

    expect(status).toEqual(AsyncStatus.REJECTED);
  });

  it('should select rejected axios error', () => {
    const error = AsyncSelector.selectError(asyncStateRejected);

    expect(error).toEqual(axiosError);
  });

  it('should select rejected axios error response', () => {
    const error = AsyncSelector.selectErrorResponse(asyncStateRejected);

    expect(error).toEqual(axiosError.response);
  });

  it('should select rejected axios error message', () => {
    const error = AsyncSelector.selectErrorMessage(asyncStateRejected);

    expect(error).toEqual(axiosError.response.data.message);
  });
});
