import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { increment, incrementByX, decrement, reset } from './counter.action';

export const initialState = {counterValue:0, toast:""};
// export const counterState = createFeatureSelector<ReadonlyArray<number>>('counterValue2');

//export const selector = createSelector(counterState);

export const counterReducer = createReducer(
  initialState,

  on(increment, (state) => ({...state, counterValue:state.counterValue+1}) ),
  on(incrementByX, (state, payload) => ({...state, counterValue:state.counterValue+ payload.num}) ),
  on(decrement, (state) => ({...state, counterValue:state.counterValue-1}) ),
  on(reset, (state) => ({...state, counterValue:0}) ),
  
);
