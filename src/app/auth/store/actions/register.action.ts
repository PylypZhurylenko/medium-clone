import { createAction, props } from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/shared/types/backEndErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { ActionType } from '../actionTypes';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionType.REGISTER_SECCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(
  ActionType.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
