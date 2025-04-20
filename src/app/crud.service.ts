import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iruser } from './iruser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

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