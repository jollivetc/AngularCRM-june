import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../login/authentication.service';

@Injectable()
export class JWTIntercepteurService implements HttpInterceptor{

  constructor(private authentService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = this.authentService.token;
    const clone = req.clone({setHeaders:{Authorization : `Bearer ${jwt}`}})
    return next.handle(clone);
  }
}
