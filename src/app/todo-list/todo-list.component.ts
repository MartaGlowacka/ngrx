import { IAppState, selectUserList } from './../index';

import { IUser, ITodoApi } from './todo.reducer';


import { AddContent, AddTitle, GetTodo, AddNumberToTitle, GetUsers } from './todo.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todo$: Observable<string>;
  title$: Observable<string>;
  user$: Observable<IUser>

  users$: Observable<IUser[]>

  todoApi$: Observable<string>;

  // constructor(private todoService: TodoService, private store: Store<{ todo: any, title: string, user: IUser, todoApi: ITodoApi }>) {
  constructor(private todoService: TodoService, private store: Store<IAppState>) {


    this.todo$ = store.pipe(select('todo'));
    this.title$ = store.pipe(select('todoTitle'))
    this.user$ = store.pipe(select('user'));
    this.todoApi$ = store.pipe(select('todoApi'));

    this.users$ = store.pipe(select(selectUserList));

    // this.title$ = store.pipe(select(state => state['title']));

  }

todosiki  = []

  ngOnInit() {

  //  this.store.dispatch(new GetUsers());

    this.todoService.getUsers().subscribe(res => {
      console.log(res)
    })



    this.users$.subscribe(res => {
      console.log(res);
    })

    //  this.store.subscribe(res => {
    //    console.log(res);
    //  })

    //   this.todo$.subscribe(res => {
    //     console.log(res)


    //   })

    //   this.user$.subscribe(res => {
    //     console.log(res)
    //   })

    //   this.todoApi$.subscribe(res => {
    //     console.log(res)
    //   })
  }

  loadUsers () {
    this.store.dispatch(new GetUsers());
    this.store.dispatch({type: '[User] Get Users'});
  }

  loadTodoApi () {
    this.store.dispatch({ type: '[Todo] LoadTodoApi' });
  }

  getTodo() {
    this.store.dispatch(new GetTodo());
  }

  addTitle() {
    this.store.dispatch(new AddTitle({title: 'That is my new title'}));
  }

  addContent() {
    this.store.dispatch(new AddContent({content: 'new content'}));
  }

  addNumberToTile() {
    this.store.dispatch(new AddNumberToTitle());
  }



}
