import { all } from 'redux-saga/effects';
import { victimUploadSaga } from './victimUpload.saga';

export function* rootSaga() {
  yield all([victimUploadSaga()]);
}
