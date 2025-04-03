import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private apiUrl = 'http://localhost:5000/rdvView';
  private apiUrl2 = 'http://localhost:5000/tacheView';
  private apiUrl3 = 'http://localhost:5000/detail_operation';

  constructor(private http: HttpClient) { } 

  getRdvView(): Observable<any> {
    return this.http.get(`${this.apiUrl}/rdv-faire/67d6938ce5a5f58b09b9a1d9`);
  }

  getTacheView(): Observable<any> {
    return this.http.get(`${this.apiUrl2}/mecanicien-pending/67e02d5f80d89536bef85558`);
  }

  modifierStatut(id: string, statut: string): Observable<any> {
    return this.http.patch(`${this.apiUrl3}/taches/${id}`, { statut });
  }

  // faireDevis(id: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl2}/mas/${id}`);
  // }
}
 