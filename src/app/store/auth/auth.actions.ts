import { createAction, props } from '@ngrx/store';

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ email: string; username: string }>()
);

export const logout = createAction('[Auth] Logout');
