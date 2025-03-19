import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.model';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthUsername = createSelector(
  selectAuthState,
  (state) => state.username
);
