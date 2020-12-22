import { VersionDto } from 'common/src/module/Version/api/VersionDto';
import { AsyncState } from 'common/src/store/async';

export type Data = VersionDto;

export type VersionState = AsyncState<Data>;

export type State = Readonly<{
  version: VersionState;
}>;
