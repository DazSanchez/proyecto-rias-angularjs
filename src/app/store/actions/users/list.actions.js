import { createAction } from '@reduxjs/toolkit';
import { withPayload } from '../../utils';

export const fetchUsers = createAction('[Users] Fetch');

export const fetchUsersSuccess = createAction(
  '[Users] Fetch Success',
  withPayload()
);

export const fetchUsersError = createAction(
  '[Users] Fetch Error',
  withPayload()
);
