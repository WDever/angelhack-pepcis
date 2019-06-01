import { produce } from 'immer';
import { VictimUploadModel, victimUploadReducerActions } from 'store';

const initialState: VictimUploadModel = {
  victimUploadStatus: 'none',
};

export const victimUploadReducer = (
  state: VictimUploadModel = initialState,
  action: victimUploadReducerActions,
) => produce(state, (draft) => {
  switch (action.type) {
    case 'VICTIM_UPLOAD':
      draft.victimUploadStatus = 'pending';
      break;

    case 'VICTIM_UPLOAD_SUCCESS':
      draft.victimUploadStatus = 'success';
      break;

    case 'VICTIM_UPLOAD_FAILURE':
      draft.victimUploadStatus = 'failure';
      break;

    default:
      break;
  }
});
