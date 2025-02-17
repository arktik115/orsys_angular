import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../services/todo.service';
import { deleteTodo, loadTodos, loadTodosSuccess } from './todo.actions';
import { map, switchMap, tap } from 'rxjs';
import { Todos } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoEffectService {
  private actions$ = inject(Actions);
  private todoService = inject(TodoService);
  
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTodos), // Action creator (le constructeur de l'action => CreateAction() de LOAD_TODO[ACTION_TYPE])
      switchMap(() => this.todoService.findAll()),
      map((todos:Todos) => loadTodosSuccess({todos})),
      tap(() => console.log("hello"))
    )
  });

  deleteTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteTodo), // Action creator (le constructeur de l'action => CreateAction() de DELETE_TODO[ACTION_TYPE])
      switchMap((action) => this.todoService.deleteTodo(action.payload)),
      map(() => loadTodos()) // Je trigger une action <loadTodos>
    )
  });

  constructor() { }
}
