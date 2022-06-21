import { Component } from '@angular/core';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Apside';
  name:string= 'Bob';

  fruits:string[]=['apple', 'pear','banana'];


  clicked($event:MouseEvent):void{
    this.name = "John";
    console.log($event);
  }
}
