import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumerService } from '../consumer.service';

@Component({
  selector: 'crm-consumer-liste',
  templateUrl: './consumer-liste.component.html',
  styleUrls: ['./consumer-liste.component.scss']
})
export class ConsumerListeComponent implements OnInit {

  consumers:Observable<Array<any>>|undefined

  constructor(private consumerService: ConsumerService) { }

  ngOnInit(): void {
    this.consumers = this.consumerService.get()
  }

}
