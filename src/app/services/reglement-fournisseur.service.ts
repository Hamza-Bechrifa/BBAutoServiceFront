import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReglementFournisseurService {

  constructor(private http: HttpClient) { }
  add(data) {
    return this.http.post(environment.api_url + '/api/ReglementFournisseurs', data);
  }                                              
}