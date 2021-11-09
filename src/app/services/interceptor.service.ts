import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable  } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  /**
   * Intercepts the http request to add the proper parameters and headers
   *
   * @param req The http request
   * @param next The http handler
   * @returns An observable
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Create header api key
    // This is the key of the api. It is not good practice to have the key hardcoded
    // and must no be added in the project but the api es free and for developers
    const headers = new HttpHeaders({
      'app-id' : '618623839d51561ba2031722'
    });
    //Create param for max registers to retrieve
    const params = new HttpParams().set('limit', environment.itemsPerPage);

    const requestClon = req.clone({headers, params});
    return next.handle(requestClon).pipe(catchError(this.catchError));
  }

  /**
   * Intercepts the errors
   * @param error The http error response
   * @returns An observable
   */
  catchError(error: HttpErrorResponse): Observable<never> {
    return throwError(`Interceptor. An error has ocurred: ${error.status}`);
  }
}
