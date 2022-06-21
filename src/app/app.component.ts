import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Apside';
  name:string= 'Bob';

  fruits:string[]=['apple', 'pear','banana'];

  handleForm(ngForm: NgForm){
    console.log(ngForm.value);
  }
  
  clicked($event:MouseEvent):void{
    this.name = "John";
    console.log($event);
  }


}
