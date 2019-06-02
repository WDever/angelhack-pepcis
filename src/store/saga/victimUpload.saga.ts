import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import {
  VICTIM_UPLOAD,
  VICTIM_UPLOAD_FAILURE,
  VICTIM_UPLOAD_SUCCESS,
  VictimUpload,
  VictimUploadParams,
} from '../action';

const victimUploadApi = (data: FormData) => axios
  .post(
    'https://25582756.ngrok.io/refugee/',
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )
  .then(res => res.data);

function* victimUploadApiSaga(action: VictimUpload) {
  if (action.type) {
    try {
      const response = yield call(victimUploadApi, action.payload);
      console.log(response);
      yield put({ type: VICTIM_UPLOAD_SUCCESS, payload: response.data });
    } catch (e) {
      console.log(e);
      yield put({ type: VICTIM_UPLOAD_FAILURE, payload: e.data });
    }
  }
}

export function* victimUploadSaga() {
  yield takeEvery(VICTIM_UPLOAD, victimUploadApiSaga);
}
