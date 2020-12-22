import { AxiosError } from 'axios';
import { createSelector, Selector } from 'reselect';

import { AsyncStatus } from 'app/common/src/enum';
import { AsyncState } from 'app/common/src/store/async/AsyncState';

export namespace AsyncSelector {
  export function selectStatus<Data>(asyncState: AsyncState<Data>): AsyncStatus {
    return asyncState.status;
  }

  export function selectData<Data>(asyncState: AsyncState<Data>): Data {
    return asyncState.data;
  }

  export function selectError<Data>(asyncState: AsyncState<Data>): AxiosError {
    return asyncState.error;
  }

  export function selectErrorResponse<Data>(asyncState: AsyncState<Data>) {
    if (selectError(asyncState)) {
      return asyncState.error.response;
    }
  }

  export function selectErrorMessage<Data>(asyncState: AsyncState<Data>): string {
    if (selectErrorResponse(asyncState)) {
      return asyncState.error.response.data.message;
    }
  }

  export function selectErrorCode<Data>(asyncState: AsyncState<Data>): number | string {
    if (selectErrorResponse(asyncState)) {
      return asyncState.error.response.data.code;
    }
  }

  export function selectDomainStatus<State, Data>(domainSelector: Selector<State, AsyncState<Data>>) {
    return createSelector(
      domainSelector,
      (domain: AsyncState<Data>): AsyncStatus => selectStatus(domain)
    );
  }

  export function selectDomainData<State, Data>(domainSelector: Selector<State, AsyncState<Data>>) {
    return createSelector(
      domainSelector,
      (domain: AsyncState<Data>): Data => selectData(domain)
    );
  }
}
