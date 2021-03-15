import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http: HttpClient) {
  }
  List() {
    return this.http.get(environment.api_url + '/api/fournisseurs');
  }
  Add(data) {
    return this.http.post(environment.api_url + '/api/fournisseurs', data);
  }
  Get(id) {
    return this.http.get(environment.api_url + '/api/fournisseurs/' + id);
  }
  Edit(data) {
    return this.http.put(environment.api_url + '/api/fournisseurs/' + data.id, data);
  }

  getMouvements(id) {
    return this.http.get(environment.api_url + '/api/fournisseurs/GetMouvement/' + id);
  }
}
