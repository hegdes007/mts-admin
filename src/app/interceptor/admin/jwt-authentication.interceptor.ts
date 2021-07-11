import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthenticationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token =""+sessionStorage.getItem("token");
    // "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJEYXJzaGFuIiwiZXhwIjoxNjI0ODc3OTU0LCJpYXQiOjE2MjQ4NTk5NTR9.W3bV6ECFvzSjNXmRAe_z8LmaVikqghOqlWxSa1Q0l_d4pqfjZb9jNpGRAlShTWzynoVbp09Bu0yWAU3aiAGodg"
    request = request.clone({headers: request.headers.set('Authorization', token)})
    return next.handle(request);
  }
}
