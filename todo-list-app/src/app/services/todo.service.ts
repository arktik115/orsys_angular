import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Todo, Todos } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly http:HttpClient = inject(HttpClient);
  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  public findAll():Observable<Todos> {
    return this.http.get<Todos>(environment.url_todos);
  }

  public findById(id:number): Observable<Todo> {
    return this.http.get<Todo>(`${environment.url_todos}/${id}`);
  }

  public deleteTodo(todo:Todo) {
    return this.http.delete<void>(`${environment.url_todos}/${todo.id}`);
  }

  public updateById(todo:Todo) {
    return this.http.patch<Todo>(`${environment.url_todos}/${todo.id}`, todo);
  }

  public save(todo:Todo):Observable<Todo>{  
    return this.http.post<Todo>(environment.url_todos,todo, this.httpOptions);
  }

}
