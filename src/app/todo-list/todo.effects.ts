import { IAppState, selectUserList } from './../index';
import { GetUser, EUserActions, GetUserSuccess, GetUsers, AddUser, AddUserSuccess } from './todo.actions';
import { TodoService, IUserHttp, IUser } from './todo.service';
import { Injectable, OnInit } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { EMPTY, of } from 'rxjs';
import { map, mergeMap, withLatestFrom, switchMap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

@Injectable()
export class TodoEffects implements OnInit {

  @Effect()
  loadMovies$ = this.actions$
    .pipe(
      ofType('[Todo] LoadTodoApi'),
      mergeMap(() => this.todoService.getAll()
        .pipe(
          map(todoApi => ({ type: '[Todo] TodoApi Loaded Success', payload: todoApi }))

      )
    ));

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {
    this.actions$.subscribe(res => {
      console.log(res)
    })


  }

  ngOnInit () {

  }
}


@Injectable()
export class UserEffects {
  // @Effect()
  // getUser$ = this._actions$.pipe(
  //   ofType<GetUser>(EUserActions.GetUser),
  //   map(action => action.payload),
  //   withLatestFrom(this._store.pipe(select(selectUserList))),
  //   switchMap(([id, users]) => {
  //     const selectedUser = users.filter(user => user.id === +id)[0];
  //     return of(new GetUserSuccess(selectedUser));
  //   })
  // );





  @Effect()
  getUsers$ = this._actions$
  .pipe(
    ofType(EUserActions.GetUsers),
    mergeMap(() => this._userService.getUsers()
      .pipe(
        map(users => ({ type: '[User] Get Users Success', payload: users })),
      )
    )
  );

//to na dole bylo oryginalnie ALE nie dziala nie wiem czemu

// @Effect()
// getUsers$ = this._actions$.pipe(
//   ofType<GetUsers>(EUserActions.GetUsers),
//   switchMap(() => this._userService.getUsers()),
//   switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
// );


  // @Effect()
  // addUsers$ = this._actions$
  // .pipe(
  //   ofType(EUserActions.AddUser),
  //   mergeMap(() => this._userService.addUser({id: 5, name: 'Karol Mróz', cardNumber: 'xxxx-xxxx-6432', cardType: 'visa'})
  //     .pipe(
  //       map(user => ({ type: '[User] Add User Success', payload: user })),
  //     )
  //   )
  // );


  @Effect()
  addUser$ = this._actions$
  .pipe(ofType(EUserActions.AddUser),
  switchMap(() => this._userService.addUser({id: 5, name: 'Karol Mróz', cardNumber: 'xxxx-xxxx-6432', cardType: 'visa'})),
  switchMap((users: IUser) =>of (new AddUserSuccess(users)))
  )

    // @Effect()
  // getUser$ = this._actions$.pipe(
  //   ofType<GetUser>(EUserActions.GetUser),
  //   map(action => action.payload),
  //   withLatestFrom(this._store.pipe(select(selectUserList))),
  //   switchMap(([id, users]) => {
  //     const selectedUser = users.filter(user => user.id === +id)[0];
  //     return of(new GetUserSuccess(selectedUser));
  //   })
  // );







  constructor(
    private _userService: TodoService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}

