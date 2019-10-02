import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  API_URI = 'http://localhost:3000/api/cities';

  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get(`${this.API_URI}`);
  }

}