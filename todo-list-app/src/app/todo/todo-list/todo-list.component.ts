import { AfterViewInit, Component, inject, OnInit, Pipe } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo, Todos } from '../../models/todo';
import { EMPTY, filter, map, merge, Observable, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MessageQueueService } from '../../services/message-queue.service';
import { Action } from '../../models/action';
import { ActionType } from '../../models/action-type';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, MatTableModule, MatCheckboxModule, MatButtonModule], // Comme tout est sans module, il faut importer ici pour que typescript l'injecte dans son code (sinon il ne comprend pas <async>)
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit, AfterViewInit {
  private readonly todoService = inject(TodoService);
  private readonly messageQueueService = inject(MessageQueueService);
  
  public todos$: Observable<Todos> = EMPTY; // ne marche que sur les observables => un initialisateur
  // public todo$!:Observable<Todos>        // l'alternative à la ligne précédente
  
  displayedColumns = ['id', 'title', 'completed', 'ticked', 'deleteButton'];
  
  ngOnInit(): void {
    // Gère tous les messages de type "Charger les données" (ne sert pas énormément, ne sert que pour l'initialisation)
    const loadTodos$ = this.messageQueueService.bus$.pipe(
      filter((action:Action)=>action.type==ActionType.LOAD_TODO)
    )
    // Gère tous les messages de type "ajouter une donnée" + lance les rxjs qui gerent ça
    const newTodo$ = this.messageQueueService.bus$.pipe(
      filter((action:Action)=>action.type==ActionType.NEW_TODO),
      switchMap((action:Action)=>this.todoService.save(action.payload as Todo))
    )
    // Gère tous les messages de type "supprimer une donnée" + lance les rxjs qui gerent ça
    const deleteTodo$ = this.messageQueueService.bus$.pipe(
      filter((action:Action)=>action.type==ActionType.DELETE_TODO),
      switchMap((action:Action)=>this.todoService.deleteTodo(action.payload as Todo))
    )
    
    // on chope toutes les réponses de ces observables et à la fin de la réception, on recharge le tableau
    this.todos$ = merge(loadTodos$, newTodo$,deleteTodo$).pipe(
      switchMap(()=>this.todoService.findAll())
    )
  }
  
  ngAfterViewInit(): void {
    this.messageQueueService.dispatch({type:ActionType.LOAD_TODO});
  }
  
  update(todo: Todo): void {
    todo.completed = !todo.completed;
  }
  
  delete(todo: Todo): void {
    console.log(`SUPPRIMER ID ${todo.id!}`);
    /*
    //old code
    this.todos$ = this.todoService.deleteTodo(todo).pipe(
    tap(data => console.log(data)),
    switchMap(() => this.todoService.findAll()),
    tap(data => console.log(data))
    );*/
    // new code
    this.messageQueueService.dispatch({type:ActionType.DELETE_TODO, payload: todo});
  }
}
