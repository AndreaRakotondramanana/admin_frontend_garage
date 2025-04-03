import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GarageService {
  private apiUrl = 'http://localhost:5000/garage';

  constructor(private http: HttpClient) { }

  getGarages(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addGarages(garage: any): Observable<any> { 
    return this.http.post(this.apiUrl, garage);
  }

  updateGarage(id: string, garage: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, garage);
  }

  deleteGarage(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
 