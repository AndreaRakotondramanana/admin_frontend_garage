import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MecanicienViewService {
  private apiUrl = 'http://localhost:5000/mecanicienView';
  private apiUrl2 = 'http://localhost:5000/mecanicien';

  constructor(private http: HttpClient) { } 

  getMecanicienView(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Récupérer un mécanicien par son ID
  getMecanicienById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`); // Utilisez l'URL de l'API CRUD
  }

  deleteMecanicien(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl2}/${id}`);
  }
}
 