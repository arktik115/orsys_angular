import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo, Todos } from '../../models/todo';
import { EMPTY, filter, Observable, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, MatTableModule, MatCheckboxModule, MatButtonModule], // Comme tout est sans module, il faut importer ici pour que typescript l'injecte dans son code (sinon il ne comprend pas <async>)
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  private readonly todoService = inject(TodoService);
  public todos$: Observable<Todos> = EMPTY; // ne marche que sur les observables => un initialisateur
  // public todo$!:Observable<Todos>        // l'alternative à la ligne précédente

  displayedColumns = ['id', 'title', 'completed', 'ticked', 'deleteButton'];

  ngOnInit(): void {
    this.todos$ = this.todoService.findAll();
  }

  update(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  delete(todo: Todo): void {
    console.log(`SUPPRIMER ID ${todo.id!}`);
    this.todos$ = this.todoService.deleteById(todo.id!).pipe(
      tap(data => console.log(data)),
      switchMap(() => this.todoService.findAll()),
      tap(data => console.log(data))
    );
  }
}
