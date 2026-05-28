import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize, catchError, throwError } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService, private router:Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    this.loaderService.showLoader();

    const token = localStorage.getItem('token');

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }

    return next.handle(request).pipe(

      catchError((error)=>{
        console.log(error)

        if(error.status === 401 || error.status === 403){
          localStorage.clear();

          this.router.navigate(['/']);
        }

        alert(error.error.message || 'Something went wrong')

        return throwError(()=>error);
        
      }),

      finalize(() => {
        this.loaderService.hideLoader();
      })
    )

  }
}
