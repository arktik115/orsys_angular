import { createAction, props } from '@ngrx/store';
/*
import { createActionGroup, props } from '@ngrx/store';

export const BooksActions = createActionGroup({
    source: 'Books',
    events: {
      'Add Book': props<{ bookId: string }>(),
      'Remove Book': props<{ bookId: string }>(),
      '[Counter Component] Increment': props<{number}>(),
    },
});
*/

export const increment = createAction('[Counter Component] Increment');
export const incrementByX = createAction('[Counter Component] IncrementByX', props<{num:number}>());
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');