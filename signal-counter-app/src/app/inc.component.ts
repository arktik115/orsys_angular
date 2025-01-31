import { Component, computed, effect, inject, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountSignalService } from './services/count-signal.service';

@Component({
  selector: 'inc',
  imports: [],
  templateUrl: './inc.component.html',
})
export class IncComponent {
  title = 'Inc component';
  count = inject(CountSignalService);

  public inc():void{    
    this.count.increment();
  }
}
