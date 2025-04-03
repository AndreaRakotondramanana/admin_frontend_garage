import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private apiUrl = 'http://localhost:5000/operationView';
  // private apiUrl2 = 'http://localhost:5000/mecanicien';

  constructor(private http: HttpClient) { } 

  getOperationView(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getOperationViewCours(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cours/67d6938ce5a5f58b09b9a1d9`);
  }

  // Récupérer un mécanicien par son ID
  // getMecanicienById(id: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/${id}`); // Utilisez l'URL de l'API CRUD
  // }

  // deleteMecanicien(id: string): Observable<any> {
  //   return this.http.delete(`${this.apiUrl2}/${id}`);
  // }
}
