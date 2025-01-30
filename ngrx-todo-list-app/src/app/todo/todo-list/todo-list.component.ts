import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from '../../models/todo';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { loadTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, MatTableModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  title = "bonjour";
  displayedColumns = ['id', 'title', 'completed', 'ticked', 'deleteButton'];

  todos$: Observable<Todos>;

  constructor(private store:Store<{todoList:Todos}>) {
    this.todos$ = this.store.select('todoList'); // => Le nom de l'attribut du store (dans app.config.ts) de type <todoReducer> (qui est unique)
  }
  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }
}
