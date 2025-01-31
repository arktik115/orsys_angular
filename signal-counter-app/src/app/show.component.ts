import { Component, effect, inject, OnInit } from '@angular/core';
import { CountSignalService } from './services/count-signal.service';

@Component({
  selector: 'show',
  imports: [],
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
