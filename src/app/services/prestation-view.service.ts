import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestationViewService {
  private apiUrl = 'http://localhost:5000/prestationView';
  private apiUrl2 = 'http://localhost:5000/prestation';

  constructor(private http: HttpClient) { } 

  getPrestationView(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Récupérer une prestation par son ID
  getPrestationById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Récupérer les prestations par l'ID de la catégorie
  getPrestationByIdCat(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/categorie/${id}`);
  }

  // Supprimer une prestation
  deletePrestation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl2}/${id}`);
  }

  // Ajouter une prestation
  addPrestation(prestation: any): Observable<any> {
    return this.http.post(`${this.apiUrl2}`, prestation);
  }

  // Prendre toutes les prestations par categorie
  getPrestationsByCat(): Observable<any> {
    return this.http.get(`${this.apiUrl}/prestations-par-categorie`);
  }
}