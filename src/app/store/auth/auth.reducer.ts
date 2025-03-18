import { createReducer, on } from '@ngrx/store';
import { loginSuccess, logout } from './auth.actions';
import { AuthState } from './auth.model';

const initialState: AuthState = {
  email: null,
  username: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { email, username }) => ({
    ...state,
    email,
    username,
  })),
  on(logout, () => initialState)
);
