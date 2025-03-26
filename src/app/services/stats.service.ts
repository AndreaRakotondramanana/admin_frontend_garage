import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService { 
  private apiUrl = 'http://localhost:5000/presenceView/stats';

  constructor(private http: HttpClient) { }

  getPresenceParJour(): Observable<any> {
    return this.http.get(`${this.apiUrl}/daily`);
  }

  getPresenceParMois(): Observable<any> {
    return this.http.get(`${this.apiUrl}/monthly`);
  }

  getPresenceParAn(): Observable<any> {
    return this.http.get(`${this.apiUrl}/yearly`);
  }
}
