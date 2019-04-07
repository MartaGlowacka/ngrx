// import { IAppState } from './../index';
import { IState, ITodo } from './todo.reducer';

import { ActionTypes, UserActionTypes, UserActions, EUserActions } from './todo.actions';
import { Action, createSelector, ActionReducerMap } from '@ngrx/store';

export interface ITodoApi {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

// export interface IUser  {
//   id: number,
//   name: string,
//   lastName: string
// }



export interface IUser {
  id: number;
  name: string;
  cardNumber: string;
  cardType: string;
}


export interface ITodo {
  id: number,
  title: string,
  content: string,
}

export interface IState {
  user: IUser,
  todos: ITodo[],
  // todoApi: ITodoApi[]
}

// export const initialState: IState = {
//   user: {id: 5, name: 'Jan', lastName: 'Januszewski'},
//   todos: [
//     {id: 0, title: 'First todos', content: 'First todos description'},
//    {id: 1, title: 'Second todos', content: 'Sec todos desc'}
//   ],
//   // todoApi: []
// }


// export interface IState {
//   id: number;
//   title: string;
//   content: string;
// }

// export const initialState = {
//   id: 0,
//   title: 'Enter title',
//   content: 'Enter content'
// };


// export const initialState = ['dljfnjdfn', 3, 2,];

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser: null
};


export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload
      };
    }
    // case EUserActions.GetUserSuccess: {
    //   return {
    //     ...state,
    //     selectedUser: action.payload
    //   };
    // }

    case EUserActions.AddUserSuccess: {
      return {
        ...state,
        users: Object.assign({...state.users},action.payload )
      }
    }

    default:
      return state;
  }
};




// export function todoApiReducer(state = initialState, action: Action) {
//   switch(action.type) {
//     case ActionTypes.LoadedSuccess:
//     return action['payload'];

//   }
// }

// export function userReducer(state = initialState, action: Action) {
//   switch(action.type) {
//     case UserActionTypes.GetUser:
//     return initialState.user;
//     default:
//     return initialState.user;
//   }
// }



// export function todoReducer(state = initialState, action: Action) {
//   switch (action.type) {
//     case ActionTypes.AddTitle:

//     // return action['payload'].title;
//     return {...state.user, ...state.todos, title: action['payload'].title};

//     case ActionTypes.AddContent:
//     return action['payload'].content;

//     // return {...state, content: action['payload'].content};

//     case ActionTypes.GetTodo:
//     return initialState;

//     default:
//       return state;
//   }

// }
// export function todoTitleReducer(state = initialState['title'], action: Action) {
//     switch (action.type) {
//       case ActionTypes.AddNumberToTitle:
//       return initialState['title'] + '12345'


//     default:
//     return state;

//     }
//   }

