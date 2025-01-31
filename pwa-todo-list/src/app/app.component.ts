import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { TodoService } from './services/todo.service';
import { Observable, EMPTY } from 'rxjs';
import { Todos } from './models/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pwa-todo-list';
  todoService = inject(TodoService);
  todos$: Observable<Todos> = EMPTY;

  constructor(swUpdate: SwUpdate) {
    //console.log("swUpdate",swUpdate.);
    swUpdate.versionUpdates.subscribe((event:VersionEvent) => {
      console.log(event.type);
      
    })
  }

  ngOnInit(): void {
    this.todos$ = this.todoService.findAll()
  }

}
