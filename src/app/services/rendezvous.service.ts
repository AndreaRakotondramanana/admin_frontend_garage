import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  private apiUrl = 'http://localhost:5000/api/rendez_vous';

  constructor(private http: HttpClient) { }

  // Fonction pour récupérer les headers avec le token
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  // Récupérer la liste des rendez-vous
  getRendezVous(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/liste`, { headers: this.getHeaders() });
  }

  // Valider ou refuser un rendez-vous
  validateRendezVous(id: string, action: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/validation-rendez-vous`, { rendezVousId: id, action }, { headers: this.getHeaders() });
  }

  // Obtenir les détails d'un rendez-vous
  getRendezVousDetail(id: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/detail`, { rendezVousId: id }, { headers: this.getHeaders() });
  }
}
