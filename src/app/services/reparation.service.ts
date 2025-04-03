import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReparationService {
  private apiUrl = 'http://localhost:5000/operationView';
  private apiUrl2 = 'http://localhost:5000/operation';
  private apiUrl3 = 'http://localhost:5000/detailOperationView';

  constructor(private http: HttpClient) { } 

  getOperationView(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cours/67d6938ce5a5f58b09b9a1d9`);
  }

  getOperationViewById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`); 
  }

  marquerHistorique(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl2}/mas/${id}`);
  }

  getDetailOperationByIdOp(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl3}/operation/${id}`);
  }

  getDetailClientByIdOp(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
 