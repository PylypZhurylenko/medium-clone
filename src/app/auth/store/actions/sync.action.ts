import { createAction } from '@ngrx/store';
import { ActionType } from '../actionTypes';

export const logoutAction = createAction(ActionType.LOGOUT);
