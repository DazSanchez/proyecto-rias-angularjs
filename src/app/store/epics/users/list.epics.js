import { combineEpics } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import {
  fetchUsers,
  fetchUsersError,
  fetchUsersSuccess,
} from '../../actions/users/list.actions';

const fetchUsersEpic$ = (action$) =>
  action$.pipe(
    filter(fetchUsers.match),
    switchMap(() =>
      usersService.getUsers().pipe(
        map((payload) => fetchUsersSuccess({ payload })),
        catchError((payload) => of(fetchUsersError({ payload })))
      )
    )
  );

export const listEpics$ = combineEpics(fetchUsersEpic$);
