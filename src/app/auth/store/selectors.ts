import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (auhtState: AuthStateInterface) => auhtState.validationErrors
);
export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (auhtState: AuthStateInterface) => auhtState.isLoggedIn
);
export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (auhtState: AuthStateInterface) => auhtState.isLoggedIn === false
);
export const currentUserSelector = createSelector(
  authFeatureSelector,
  (auhtState: AuthStateInterface) => auhtState.currentUser
);
