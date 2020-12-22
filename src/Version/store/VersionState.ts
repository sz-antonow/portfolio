import {VersionModel} from "../model/VersionModel";
import {AsyncState} from "../../async";

export type Data = VersionModel;

export type VersionState = AsyncState<Data>;

export type State = Readonly<{
  version: VersionState;
}>;
