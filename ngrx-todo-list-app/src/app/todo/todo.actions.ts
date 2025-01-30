import { createAction, props } from "@ngrx/store";
import { ActionType } from "../models/action-type";
import { Todos } from "../models/todo";

export const loadTodos = createAction(ActionType.LOAD_TODO);
export const loadTodosSuccess = createAction(ActionType.LOAD_TODO_SUCCESS, props<{todos:Todos}>());