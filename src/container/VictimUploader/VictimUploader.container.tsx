import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import VictimUploaderComponent from 'components/VictimUploader';
import {
  AppState,
  victimUploadActions,
  victimUploadReducerActions,
} from 'store';

const mapStateToProps = ({ victimUpload }: AppState) => ({
  victimUploadStatus: victimUpload.victimUploadStatus,
});

const mapDispatchToProps = (
  dispatch: Dispatch<victimUploadReducerActions>,
) => ({
  victimUploadApi: bindActionCreators(
    victimUploadActions.victimUpload,
    dispatch,
  ),
});

const VictimUploaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VictimUploaderComponent);

export default VictimUploaderContainer;
