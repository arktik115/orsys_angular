import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormBuilder, FormsModule, Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo-reactive-form',
  imports: [FormsModule,MatFormFieldModule,MatButtonModule,MatCheckboxModule,MatInputModule, ReactiveFormsModule],
  templateUrl: './todo-reactive-form.component.html',
  styleUrl: './todo-reactive-form.component.css'
})
export class TodoReactiveformComponent {
  private todoService: TodoService = inject(TodoService);
  // private messageQueueService: MessageQueueService = inject(MessageQueueService);
  private fb: FormBuilder = inject(FormBuilder);

  todoForm = this.fb.group({
    title:['',Validators.required],
    completed:[false]
  })

  public save(){
    console.log(this.todoForm.value);
    console.log(this.todoForm.getRawValue());
    console.log(`{}`, this.todoForm.value as Todo);
    
    this.todoService.save(this.todoForm.value as Todo ).subscribe();
    //this.todoService.save(this.todoForm.value as Todo ).subscribe(()=>this.messageQueueService.dispatch({type:"NEW_TODO"}))
  }


}
