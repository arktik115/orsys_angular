import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input'; 
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { switchMap, tap } from 'rxjs';
import { MessageQueueService } from '../../services/message-queue.service';
import { Action } from '../../models/action';
import { ActionType } from '../../models/action-type';


@Component({
  selector: 'app-todo-form',
  imports: [FormsModule,MatFormFieldModule,MatButtonModule,MatCheckboxModule,MatInputModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent implements OnInit {
  private readonly todoService = inject(TodoService);
  private readonly messageQueueService = inject(MessageQueueService);

  todoForm!:Todo;
  
  
  ngOnInit(): void {
    this.todoForm = {
      title : "123",
      completed : false
    };
  }
  
  public submitTodo() {
    this.todoService.save(this.todoForm).subscribe();
    const action:Action = {type:ActionType.NEW_TODO, payload: this.todoForm};
    this.messageQueueService.dispatch(action);
  }
}
