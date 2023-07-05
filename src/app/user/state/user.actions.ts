import { Action } from "@ngrx/store";

import { Update } from "@ngrx/entity";

import { User } from "../user.model";

export enum UserActionTypes {
  LOAD_USERS = "[User] Load Users",
  LOAD_USERS_SUCCESS = "[User] Load User Success",
  LOAD_USERS_FAIL = "[User] Load User Fail",
  LOAD_USER = "[User] Load User",
  LOAD_USER_SUCCESS = "[User] Load User Success",
  LOAD_USER_FAIL = "[User] Load User Fail",
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USERS_SUCCESS;

  constructor(public payload: any) {}
}

export class LoadUsersFail implements Action {
  readonly type = UserActionTypes.LOAD_USERS_FAIL;

  constructor(public payload: string) {}
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LOAD_USER;
  constructor(public payload: number) {}
}

export class LoadUserSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class LoadUserFail implements Action {
  readonly type = UserActionTypes.LOAD_USER_FAIL;

  constructor(public payload: string) {}
}
export type Action =
  | LoadUsers
  | LoadUsersSuccess
  | LoadUsersFail
  | LoadUser
  | LoadUserSuccess
  | LoadUserFail
  
