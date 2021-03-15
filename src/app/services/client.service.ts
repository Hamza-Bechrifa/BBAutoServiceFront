import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http: HttpClient) {
  }

  clientsList() {
    return this.http.get(environment.api_url + '/api/clients');
  }
  clientsAdd(client) {
    return this.http.post(environment.api_url + '/api/clients', client);
  }
  clientsGet(id) {
    return this.http.get(environment.api_url + '/api/clients/' + id);
  }
  clientsEdit(client) {
    return this.http.put(environment.api_url + '/api/clients/' + client.id, client);
  }

  getMouvements(id) {
    return this.http.get(environment.api_url + '/api/clients/GetMouvement/' + id);
  }
}
