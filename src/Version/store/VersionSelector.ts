import { createSelector } from 'reselect';
import {Data, State, VersionState} from "./VersionState";
import {AsyncSelector} from "../../async";
import {VersionModel} from "../model/VersionModel";


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
