import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscriber, Subscription, take } from 'rxjs';
import { DemoObservableService } from '../common/demo-observable.service';

@Component({
  selector: 'crm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  observable: Observable<number>|null= null;
  private subscriptions : Subscription[]= [];
  phoneNumber="1234567890"

  constructor(private demoObservable: DemoObservableService) { }

  ngOnInit(): void {
  }

  callObservable(){
    const subscriber = {
      next:(value:number)=>{console.log(value)},
      error: (error:Error)=>{console.error(error)},
      complete:()=>{console.log('finished')}
    }
    this.observable = this.demoObservable.testObservable();
    const subscription= this.observable.subscribe(subscriber);
    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach(s=>s.unsubscribe())
  }
}
