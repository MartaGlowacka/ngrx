import { IUserHttp } from './todo.service';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface IUserHttp {
  users: IUser[];
}

export interface IUser {
  id: number;
  name: string;
  cardNumber: string;
  cardType: string;
}



@Injectable({
  providedIn: 'root'
})
export class TodoService {
     usersUrl = `${environment.apiUrl}users.json`;
  constructor (private http: HttpClient) {console.log(this.usersUrl)}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getAll() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }




  getUsers(): Observable<IUserHttp> {
    // return this.http.get<IUserHttp>('http://localhost:4200/assets/users.json');
    return this.http.get<IUserHttp>('https://jsonplaceholder.typicode.com/todos');
  }

  addUser(user: IUser) {
    return this.http.post<IUser>('https://jsonplaceholder.typicode.com/todos', user)
  }



}
