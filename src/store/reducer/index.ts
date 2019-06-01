import { combineReducers } from 'redux';
import { victimUploadReducer } from './victimUpload.reducer';

const reducer = combineReducers({
  victimUpload: victimUploadReducer,
});

export { reducer };
