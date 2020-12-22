import { Dispatch } from 'redux';

import { VersionApi } from 'common/src/module/Version/api/VersionApi';
import { VersionConst } from 'common/src/module/Version/store/VersionConst';
import { AsyncActionCreator } from 'common/src/store/async';

export namespace VersionAction {
  export const fetchVersionActions: AsyncActionCreator<any> = AsyncActionCreator.init(VersionConst.FETCH_VERSION);

  export const fetchVersion = () => (dispatch: Dispatch<any>) => {
    dispatch(fetchVersionActions.pending());

    return VersionApi.getVersion()
      .then((data) => {
        dispatch(fetchVersionActions.resolved(data));
      })
      .catch((error) => dispatch(fetchVersionActions.rejected(error)));
  };
}
