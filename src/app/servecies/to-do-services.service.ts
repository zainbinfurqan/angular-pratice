import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoAppModel } from '../models/toDoAppModel'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ToDoServicesService {


  Url: string = "https://jsonplaceholder.typicode.com/todos?_limit=5";

  constructor(private http: HttpClient) { }

  getToDos(): Observable<ToDoAppModel[]> {
    return this.http.get<ToDoAppModel[]>(this.Url);
  }

  deleteTodos(todo: ToDoAppModel): Observable<ToDoAppModel> {
    const url = `${this.Url}/${todo.id}`;
    return this.http.delete<ToDoAppModel>(url, httpOptions)
  }



}
