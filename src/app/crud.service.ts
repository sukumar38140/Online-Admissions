import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Iruser } from './iruser';
import { Iruser } from './iruser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'http://0.0.0.0:3000/RegisterUsers';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

  getData(): Observable<Iruser[]> {
    return this.http.get<Iruser[]>(this.apiUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  base_url : string = "http://localhost:3000/RegisterUsers";

  constructor(private http : HttpClient) { }

  getData(): Observable<Iruser[]> {
    return this.http.get<Iruser[]>(this.base_url);
  }

  getDataById(id: number): Observable<Iruser> {
    return this.http.get<Iruser>(`${this.base_url}/${id}`);
  }

  createData(data: Iruser): Observable<Iruser> {
    return this.http.post<Iruser>(this.base_url, data);
  }

  updateData(id: number, data: Iruser): Observable<Iruser> {
    return this.http.put<Iruser>(`${this.base_url}/${id}`, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.base_url}/${id}`);
  }

}