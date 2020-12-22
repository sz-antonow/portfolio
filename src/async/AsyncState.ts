import { AxiosError } from 'axios';

import { AsyncStatus } from 'app/common/src/enum';

export interface AsyncState<Data> {
  status: AsyncStatus;
  data: Data;
  error?: AxiosError;
}

export namespace AsyncState {
  export type Create<Data, State extends AsyncState<Data> = AsyncState<Data>> = (
    data: Data,
    error?: AxiosError
  ) => State;

  export function create<Data>(status: AsyncStatus): Create<Data> {
    return (data: Data, error?: AxiosError): AsyncState<Data> => (error ? { data, status, error } : { status, data });
  }

  export function pending<Data>(data: Data = null): AsyncState<any> {
    return create(AsyncStatus.PENDING)(data);
  }

  export function resolved<Data>(data: Data): AsyncState<any> {
    return create(AsyncStatus.RESOLVED)(data);
  }

  export function rejected<Data>(data?: Data, error?: any): AsyncState<any> {
    return create(AsyncStatus.REJECTED)(data, error);
  }

  export function initial<Data>(data: Data = null): AsyncState<any> {
    return create(AsyncStatus.VOID)(data);
  }
}
