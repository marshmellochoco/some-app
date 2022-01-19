import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  apiUrl = "http://localhost:8000/";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.apiUrl).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `${error.status}: ${error.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
