import { createSelector } from 'reselect';

import { VersionModel } from 'common/src/module/Version/model/VersionModel';
import { Data, State, VersionState } from 'common/src/module/Version/store/VersionState';
import { AsyncSelector } from 'common/src/store/async';

export namespace VersionSelector {
  export function selectDomain<T extends State>(state: T): VersionState {
    return state.version;
  }

  export const selectData = createSelector(
    AsyncSelector.selectDomainData(selectDomain),
    (version): Data => version
  );

  export const selectVersion = createSelector(
    selectData,
    (data: VersionModel) => data && data.version
  );
}
