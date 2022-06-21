import { Injectable } from '@angular/core';
import { User } from './model/user';

const USER_TOKEN_KEY = 'angularCRM.USER';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user?:User;

  constructor() {
    if(sessionStorage.getItem(USER_TOKEN_KEY)){
      this.user= JSON.parse(sessionStorage.getItem(USER_TOKEN_KEY)!);
    }
   }

  authentUser(login: string, password:string){

    this.user =  {
      id: 1,
      login: login,
      lastname: 'Doe',
      firstname: 'John'
    }
    sessionStorage.setItem(USER_TOKEN_KEY, JSON.stringify(this.user))
    return this.user;
  }
}
