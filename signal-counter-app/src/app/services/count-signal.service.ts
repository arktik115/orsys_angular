import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountSignalService {
  private _count:WritableSignal<number> = signal(0);
  readonly count:Signal<number> = this._count.asReadonly();

  public increment() {
    this._count.update((value:number) => value + 1);
  }
}
