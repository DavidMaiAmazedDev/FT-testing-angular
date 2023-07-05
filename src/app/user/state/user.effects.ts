import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as userActions from "../state/user.actions";
import { UserService } from "../user.service";
import { User } from "../user.model";

@Injectable()
export class UserEffect {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadUsers>(userActions.UserActionTypes.LOAD_USERS),
    mergeMap((action: userActions.LoadUsers) =>
      this.userService.getUsers().pipe(
        map(
          (users: User[]) =>
            // console.log(users)
            new userActions.LoadUsersSuccess(users)
        ),
        catchError((err) => of(new userActions.LoadUsersFail(err)))
      )
    )
  );

  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadUser>(userActions.UserActionTypes.LOAD_USER),
    mergeMap((action: userActions.LoadUser) =>
      this.userService.getUserById(action.payload).pipe(
        map((user: User) => new userActions.LoadUserSuccess(user)),
        catchError((err) => of(new userActions.LoadUserFail(err)))
      )
    )
  );
}
