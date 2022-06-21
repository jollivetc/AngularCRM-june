import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularCRM';

  doSomethingOutside($event:string){
    console.log($event);
  }
  doSomethingOutside2($event:string){
    console.error($event);
  }
}
