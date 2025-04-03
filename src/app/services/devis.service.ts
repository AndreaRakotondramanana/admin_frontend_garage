import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevisService {
  private apiUrl = 'http://localhost:5000/operations';

  constructor(private http: HttpClient) { }

  createDevis(rdvId: string, prestations: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/devis`, { rdvId, prestations });
  }
}