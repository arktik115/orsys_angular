import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, Todos } from '../../models/todo';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { deleteTodo, loadTodos, TodoActionPayload } from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, MatTableModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  private store:Store<{todoList:Todos}> = inject(Store);
  todos$: Observable<Todos> = this.store.select('todoList'); // => Le nom de l'attribut du store (dans app.config.ts) de type <todoReducer> (qui est unique)

  readonly title = "bonjour";
  readonly displayedColumns = ['id', 'title', 'completed', 'ticked', 'deleteButton'];



  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }

  delete(todo:Todo) {
    const payload:TodoActionPayload = {
      payload:todo
    };

    this.store.dispatch(deleteTodo(payload));
  }
}
