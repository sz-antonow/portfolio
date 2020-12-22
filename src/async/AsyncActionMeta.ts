import { AsyncStatus } from 'app/common/src/enum';

export type AsyncActionMeta = Readonly<{
  type: string;
  asyncStatus: AsyncStatus;
}>;
