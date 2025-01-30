import { createReducer, on } from '@ngrx/store';
import { loadTodosSuccess } from './todo.actions';
import { Todos } from '../models/todo'

export const initialState:Todos = []

export const todoReducer = createReducer(
  initialState,
  on(loadTodosSuccess, (state,action)=> action.todos)
);
