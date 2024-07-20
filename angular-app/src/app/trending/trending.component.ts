import { Component, Input, Output ,OnInit,ViewEncapsulation} from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [],
  template: `<h1>{{name}}</h1>
  <button (click)="fireEvent()">send event</button>
  `,
  //above one is for the second case
  //'<h1>{{parentData}}</h1>',//`<div>welcome!!!!!!
  //</div>`,//here instead of passing file, we are diectly writing the html code
  styles: [`
    div{
    font-size:80px;
    }
    `]
})
export class TrendingComponent implements OnInit{
  //@Input() public parentData:any;
  //or
  @Input('parentData') public name:any;
  @Output() public childEvent=new EventEmitter();
constructor(){

}
ngOnInit():void{

}
fireEvent(){
  this.childEvent.emit('chyyyyyy');
}
}
