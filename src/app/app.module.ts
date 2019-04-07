import { AppRoutingModule } from './app.routing.module';
import { UserEffects } from './todo-list/todo.effects';

// import { todoTitle, reducers } from './index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule, ActionReducerMap} from '@ngrx/store';
// import { todoReducer, todoTitleReducer, userReducer, appReducers } from './todo-list/todo.reducer';
import { TodoListComponent } from './todo-list/todo-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
// import * as fromRoot from './todo-list/todo.reducer';
import { HttpClientModule } from '@angular/common/http';
import { TodoEffects } from './todo-list/todo.effects';
import { appReducers } from '.';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';


// export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<fromRoot.IState>>('Registered reducers');


@NgModule({
  declarations: [
    AppComponent,
     TodoListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot(appReducers),

    // StoreModule.forRoot({'todo':todoReducer, 'todoTitle':todoTitleReducer, 'user': userReducer, 'todoApi': fromRoot.todoApiReducer}),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([UserEffects]),
    StoreRouterConnectingModule.forRoot({stateKey:'router'}),
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
