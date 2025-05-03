import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Iruser } from './iruser';

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

  getDataById(id: number): Observable<Iruser> {
    return this.http.get<Iruser>(`${this.apiUrl}/${id}`);
  }

  createData(data: Iruser): Observable<Iruser> {
    return this.http.post<Iruser>(this.apiUrl, data);
  }

  updateData(id: number, data: Iruser): Observable<Iruser> {
    return this.http.put<Iruser>(`${this.apiUrl}/${id}`, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}