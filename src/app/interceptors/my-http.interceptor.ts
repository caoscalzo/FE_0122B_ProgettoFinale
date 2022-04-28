import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let authReq: HttpRequest<any> = req.clone({
      headers: req.headers.set(
          'Authorization',
          'Bearer ' +
'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MDYyOTMzNiwiZXhwIjoxNjUyNzc2ODE5fQ.gGBGelgEVQSXRmOYj2ZqsXKkVN1RF-LnNEyQbduLrycuyZWcb8kvhDDhHpRIcPI_wJnBPVyzUYYr1w-r1pvP3w'        )
        .set('X-TENANT-ID', 'fe_0122b'),
    });
    return next.handle(authReq);
  }
}
