import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, incrementByX, decrement, reset } from './counter.action';
import { FormsModule } from '@angular/forms';
import { initialState } from './counter.reducer';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  // store: Store<counterState> = inject(Store);
  title = 'ngrx-counter-app';
  count$!: Observable<{ counterValue:number }>;
  value!: number;

  constructor(private store:Store< {count : {counterValue:number}}>) {
    this.count$! = store.select('count');
  }

  ngOnInit(): void {
    this.count$ = this.store.select('count');
    this.value = 0;
  }

  increment() {
    this.store.dispatch(increment());
  }

  incrementByX() {
    this.store.dispatch(incrementByX({num:+this.value}));
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }}
