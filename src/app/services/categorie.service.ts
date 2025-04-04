import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategorieService { 
  private apiUrl = 'http://localhost:5000/categorie';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addCategories(categorie: any): Observable<any> { 
    return this.http.post(this.apiUrl, categorie);
  }

  updateCategorie(id: string, categorie: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, categorie);
  }

  deleteCategorie(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}