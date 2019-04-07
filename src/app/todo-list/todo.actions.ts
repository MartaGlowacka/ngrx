import { ITodoApi, IUser } from './todo.reducer';
import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddTitle = '[TodoList Component] AddTitle',
  AddContent = '[TodoList Component] AddContent',
  GetTodo = '[TodoList Component] GetTodo',
  AddNumberToTitle = '[TodoList Component] AddNumberToTitle',

  LoadTodoApi = '[Todo] LoadTodoApi',
  LoadedSuccess = '[Todo] TodoApi Loaded Success'
}


export class LoadTodoApi implements Action {
  readonly type  = ActionTypes.LoadTodoApi;
}

export class LoadedSuccess implements Action {
  readonly type = ActionTypes.LoadedSuccess;

  constructor(public payload: {todoApi: ITodoApi}) {}
}

export class AddTitle implements Action {
  readonly type = ActionTypes.AddTitle;

  constructor(public payload: {title: string}) {}
}

export class AddContent implements Action {
  readonly type = ActionTypes.AddContent;

  constructor(public payload: {content: string}) {}
}

export class GetTodo implements Action {
  readonly type = ActionTypes.GetTodo;
}

export class AddNumberToTitle implements Action {
  readonly type = ActionTypes.AddNumberToTitle
}

export enum UserActionTypes {
  GetUser = '[Todo] GetUser'
}

// export class GetUser implements Action {
//   readonly type = UserActionTypes.GetUser;
// }


export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
  AddUser = '[User] Add user',
  AddUserSuccess = '[User] Add User Success'
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: IUser) {}
}

export class AddUser implements Action {
  public readonly type = EUserActions.AddUser;
  constructor(public payload: IUser) {}
}

export class AddUserSuccess implements Action {
  public readonly type = EUserActions.AddUserSuccess;
  constructor(public payload: IUser) {}
}


export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess | AddUser | AddUserSuccess;
