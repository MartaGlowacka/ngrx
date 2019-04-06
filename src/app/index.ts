import { createSelector, State, combineReducers, ActionReducerMap } from '@ngrx/store';
// import { IState, todoReducer, todoTitleReducer, userReducer, IUserState } from './todo-list/todo.reducer';
import { IState, IUserState, userReducers } from './todo-list/todo.reducer';

export interface IAppState {
  users: IUserState;

}

export const todoTitle = (state: IState) => state.user;

export const selectTodoTitle = createSelector(todoTitle);

const selectUsers = (state: IAppState) => state.users;

export const selectUserList = createSelector(
  selectUsers,
  (state: IUserState) => state.users
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: IUserState) => state.selectedUser
);

export const appReducers: ActionReducerMap<IAppState, any> = {
  users: userReducers,
};

// export const reducers = combineReducers({'todo':todoReducer, 'todoTitle':todoTitleReducer, 'user': userReducer})
