import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReglementFournisseurService {

  constructor(private http: HttpClient) { }

  Add(data) {
    return this.http.post(environment.api_url + '/api/ReglementFournisseurs', data);
  }
  
  List() {
    return this.http.get(environment.api_url + '/api/ReglementFournisseurs');
  }                                              
}
