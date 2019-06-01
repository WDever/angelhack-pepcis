import { Action } from 'redux';
import { createStandardAction } from 'typesafe-actions';

export const VICTIM_UPLOAD = 'VICTIM_UPLOAD';
export const VICTIM_UPLOAD_SUCCESS = 'VICTIM_UPLOAD_SUCCESS';
export const VICTIM_UPLOAD_FAILURE = 'VICTIM_UPLOAD_FAILURE';

export class VictimUpload implements Action {
  public readonly type = VICTIM_UPLOAD;

  public constructor(public payload: string) {}
}

export class VictimUploadSuccess implements Action {
  public readonly type = VICTIM_UPLOAD_SUCCESS;

  public constructor(public payload: string) {}
}

export class VictimUploadFailure implements Action {
  public readonly type = VICTIM_UPLOAD_FAILURE;
}

export const victimUploadActions = {
  victimUpload: createStandardAction(VICTIM_UPLOAD)<string>(),
};

export type victimUploadReducerActions = | VictimUpload
| VictimUploadSuccess
| VictimUploadFailure;
