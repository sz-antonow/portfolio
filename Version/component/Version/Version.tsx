import * as React from 'react';
import { connect } from 'react-redux';

import { PlatformState } from 'app/platform-management/src/App/store/PlatformState';
import { AppVersion } from 'common/src/component/AppVersion';
import { VersionAction } from 'common/src/module/Version/store/VersionAction';
import { VersionSelector } from 'common/src/module/Version/store/VersionSelector';

export namespace Version {
  export type StateProps = {
    version: string;
  };

  export type DispatchProps = {
    fetchVersion: () => void;
  };

  export type Props = StateProps & DispatchProps;
}

const VersionPure: React.FunctionComponent<Version.Props> = (props) => {
  React.useEffect(() => {
    props.fetchVersion();
  }, []);

  return props.version && <AppVersion version={props.version} />;
};

const mapStateToProps = (state: PlatformState): Version.StateProps => ({
  version: VersionSelector.selectVersion(state)
});

const mapDispatchToProps = (dispatch: any): Version.DispatchProps => ({
  fetchVersion: () => dispatch(VersionAction.fetchVersion())
});

export const Version = connect<Version.StateProps, Version.DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(VersionPure);
