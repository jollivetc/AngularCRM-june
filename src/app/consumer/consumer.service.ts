import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from './model/consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http: HttpClient) { }

  get():Observable<Array<Consumer>> {
    return this.http.get<Array<Consumer>>('/api/consumers');
  }

  search(searchString:string):Observable<Array<Consumer>> {
    return this.http.get<Array<Consumer>>(`/api/consumers?q=${searchString}`);
  }
}
