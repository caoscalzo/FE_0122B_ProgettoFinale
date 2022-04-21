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
'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MDU0MzEyNiwiZXhwIjoxNjUwNjI5NTI2fQ.X7VRLoUoYQ8F9W5S6mXox_E9pXRYUk4cIEV8isyTmhZOfNeMI3Cp40UFfgfKFVheJGT2blJhuIyAB9lZub7nsA'        )
        .set('X-TENANT-ID', 'fe_0122b'),
    });
    return next.handle(authReq);
  }
}
