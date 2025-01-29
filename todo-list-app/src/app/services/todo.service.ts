import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Todo, Todos } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly http:HttpClient = inject(HttpClient);

  public findAll():Observable<Todos> {
    return this.http.get<Todos>(environment.url_todos);
  }

  public findById(id:number): Observable<Todo> {
    return this.http.get<Todo>(`${environment.url_todos}/${id}`);
  }

  public deleteById(id:number) {
    return this.http.delete<void>(`${environment.url_todos}/${id}`);
  }

  public updateById(todo:Todo) {
    return this.http.patch<Todo>(`${environment.url_todos}/${todo.id}`, todo);
  }

}
