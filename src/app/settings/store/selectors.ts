import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { SettingsStateInterface } from '../types/settingsState.interface';

export const settingsFeatureSelector =
  createFeatureSelector<SettingsStateInterface>('settings');

export const isSubmitting = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.isSubmitting
);

export const validationErrors = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.validationErrors
);
