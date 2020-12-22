import { Dispatch } from 'redux';

import {VersionConst} from "./VersionConst";
import {VersionApi} from "../api/VersionApi";

// import { VersionApi } from 'src/module/Version/api/VersionApi';
// import { VersionConst } from 'src/module/Version/store/VersionConst';
// import { AsyncActionCreator } from 'src/store/async';

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
