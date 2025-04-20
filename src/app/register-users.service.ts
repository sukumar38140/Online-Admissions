import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUsersService {
  private baseUrl = 'http://localhost:3000/RegisterUsers';

  constructor(private http: HttpClient) { }

  getRegisterUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getRegisterUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }

  createRegisterUser(user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, user);
  }

  updateRegisterUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, user);
  }

  deleteRegisterUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}