import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Cons, Observable } from 'rxjs';
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

  save(consumer: Consumer): Observable<Consumer>{
    if(consumer.id){
      return this.http.put<Consumer>(`/api/consumers/${consumer.id}`, consumer)
    }
    return this.http.post<Consumer>('/api/consumers', consumer);
  }

  getById(id:string):Observable<Consumer>{
    return this.http.get<Consumer>(`/api/consumers/${id}`);
  }

  delete(consumer:Consumer):Observable<any>{
    return this.http.delete<any>(`/api/consumers/${consumer.id}`);
  }
}
