import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './model/user';

const USER_TOKEN_KEY = 'angularCRM.USER';
const JWT_TOKEN_KEY = 'angularCRM.JWT'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user?:User;
  private jwtToken? : string;

  constructor(private http: HttpClient) {
    if(sessionStorage.getItem(USER_TOKEN_KEY)){
      this.user= JSON.parse(sessionStorage.getItem(USER_TOKEN_KEY)!);
      this.jwtToken = sessionStorage.getItem(JWT_TOKEN_KEY)!;
    }
   }

  authentUser(login: string, password:string):Observable<User>{
    return this.http.post<AuthentResponse>("/api/auth/login", {email: login, password:password})
      .pipe(
        map(
          (response: AuthentResponse) => {
            this.user = response.user;
            this.jwtToken = response.token;
            sessionStorage.setItem(USER_TOKEN_KEY, JSON.stringify(this.user));
            sessionStorage.setItem(JWT_TOKEN_KEY, this.jwtToken);
            return this.user;
          }
        )
      )
  }

  disconnect():void{
    this.user= undefined;
    this.jwtToken = undefined;
    sessionStorage.removeItem(USER_TOKEN_KEY);
    sessionStorage.removeItem(JWT_TOKEN_KEY);
  }

  get isAuthenticated(): boolean{
    return !!this.user;
  }
  get token():string| undefined {
    return this.jwtToken;
  }
}

interface AuthentResponse {
  user: User;
  token: string
}
