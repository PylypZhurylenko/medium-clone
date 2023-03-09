import { createAction, props } from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/shared/types/backEndErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { CurrentUserInputInterface } from 'src/app/shared/types/currentUserInput.interface';
import { ActionType } from '../actionTypes';

export const updateCurrentUserAction = createAction(
  ActionType.UPDATE_CURRENT_USER,
  props<{ currentUserInput: CurrentUserInputInterface }>()
);

export const updateCurrentUserSuccessAction = createAction(
  ActionType.UPDATE_CURRENT_USER_SECCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const updateCurrentUserFailureAction = createAction(
  ActionType.UPDATE_CURRENT_USER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
