import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { ShowComponent } from './show.component';
import { IncComponent } from './inc.component';

@Component({
  selector: 'app-root',
  imports: [IncComponent, ShowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signal-counter-app';
  count:WritableSignal<number> = signal(0);
  // WritableSignal => on peut <set> leur valeur
  // Signal         => on ne peut pas <set> leur valeur, elle ne peut que d'être mise à jour via des <compute> qui se basent sur des valeurs de <WritableSignal>
  countx2:Signal<number> = computed(() => this.count()*2);
  
  constructor(){
    effect(()=> {
      console.log(`The current count is: ${this.count()}`);
    })
  }
  public increment():void{
    this.count.update((value:number)=> value + 1);
  }
}
