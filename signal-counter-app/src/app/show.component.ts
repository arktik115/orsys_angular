import { Component, computed, effect, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountSignalService } from './services/count-signal.service';

@Component({
  selector: 'show',
  imports: [RouterOutlet],
  templateUrl: './show.component.html',
})
export class ShowComponent implements OnInit{
  title = 'Show component';
  countService = inject(CountSignalService);
  countValue!:number// = this.countService.count().valueOf();

  constructor() {
    effect(()=> {
      this.countValue = this.countService.count();
    })
  }

  
  ngOnInit(): void {    

  }


}
