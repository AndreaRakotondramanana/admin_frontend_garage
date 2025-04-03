import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class PresenceService {
  private apiUrl = 'http://localhost:5000/presence';
  private apiUrl2 = 'http://localhost:5000/presenceView';

  constructor(private http: HttpClient) { }

  getPresenceCeJour(): Observable<any> {
    return this.http.get(`${this.apiUrl2}`);
  }

  createForAll(): Observable<any> { 
    return this.http.get(`${this.apiUrl}/create-for-all`);
  }

  // updateGarage(id: string, garage: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${id}`, garage);
  // }

  marquerAbsent(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/mark-absent/${id}`);
  }
}
