import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { increment, incrementByX, decrement, reset } from './counter.action';

export interface CounterState{
  counterValue:number,
  toast:string
}

export const initialState:CounterState = {counterValue:0, toast:""};

export const counterReducer = createReducer<CounterState>(
  initialState,
  on(increment, (state) => ({...state, counterValue:state.counterValue+1}) ),
  on(incrementByX, (state, payload) => ({...state, counterValue:state.counterValue+ payload.num}) ),
  on(decrement, (state) => ({...state, counterValue:state.counterValue-1}) ),
  on(reset, (state) => ({...state, counterValue:0}) ),
  
);
