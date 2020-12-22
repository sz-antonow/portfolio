import reduceReducer from 'reduce-reducers';
import { Reducer } from 'redux';

import { VersionConst } from 'common/src/module/Version/store/VersionConst';
import { Data, VersionState } from 'common/src/module/Version/store/VersionState';
import { AsyncAction, AsyncState } from 'common/src/store/async';

const INITIAL_STATE: VersionState = AsyncState.initial<Data>();

export const appVersionReducer: Reducer<VersionState> = (state = INITIAL_STATE, action: AsyncAction<Data>) => {
  const asyncActionType = AsyncAction.createTypes(VersionConst.FETCH_VERSION);

  switch (action.type) {
    case asyncActionType.PENDING:
      return AsyncState.pending(state.data);
    case asyncActionType.RESOLVED:
      return AsyncState.resolved(action.payload);
    case asyncActionType.REJECTED:
      return AsyncState.rejected(action.payload);
    default:
      return state;
  }
};

export const versionReducer = reduceReducer<VersionState>(appVersionReducer);
