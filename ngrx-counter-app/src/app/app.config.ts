import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer, CounterState } from './counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export interface AppState{
  count: CounterState
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore<AppState>({ count: counterReducer }),//{count:{counterValue:0}}
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};