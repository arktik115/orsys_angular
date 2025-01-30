import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from "./todo/todo-list/todo-list.component";
import { TodoFormComponent } from "./todo/todo-form/todo-form.component";
import { TodoReactiveformComponent } from './todo/todo-reactive-form/todo-reactive-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoListComponent, TodoFormComponent, TodoReactiveformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list-app';
}
