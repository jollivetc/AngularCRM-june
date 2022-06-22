import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { DemoObservableService } from '../common/demo-observable.service';

@Component({
  selector: 'crm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private demoObservable: DemoObservableService) { }

  ngOnInit(): void {
  }

  callObservable(){
    const subscriber = {
      next:(value:number)=>{console.log(value)},
      error: (error:Error)=>{console.error(error)},
      complete:()=>{console.log('finished')}
    }
    this.demoObservable.testObservable().subscribe(subscriber);
  }
}
