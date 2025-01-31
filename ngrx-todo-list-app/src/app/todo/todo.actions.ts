import { createAction, props } from "@ngrx/store";
import { ActionType } from "../models/action-type";
import { Todo, Todos } from "../models/todo";

export const loadTodos = createAction(ActionType.LOAD_TODO);
export const loadTodosSuccess = createAction(ActionType.LOAD_TODO_SUCCESS, props<{todos:Todos}>());
// ici, pas besoin de créer une interface de payload pour loadTodosSuccess car c'est juste une action à afficher sur la dev-tools redux

export interface TodoActionPayload {
    payload:Todo;
};
export const deleteTodo = createAction(ActionType.DELETE_TODO, props<TodoActionPayload>());