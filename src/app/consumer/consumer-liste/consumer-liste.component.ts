import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../model/consumer';

@Component({
  selector: 'crm-consumer-liste',
  templateUrl: './consumer-liste.component.html',
  styleUrls: ['./consumer-liste.component.scss']
})
export class ConsumerListeComponent implements OnInit {

  consumers:Observable<Array<Consumer>>|undefined
  searchString:string= '';

  constructor(private consumerService: ConsumerService) { }

  ngOnInit(): void {
    this.consumers = this.consumerService.get()
  }

  search(){
    this.consumers = this.consumerService.search(this.searchString);
  }

  delete(consumer:Consumer){
    this.consumerService.delete(consumer).subscribe({
      next:(data)=>{this.consumers = this.consumerService.get()},
      error:(error)=>{console.error(error)},
      complete:()=>{}
    })
  }
}
