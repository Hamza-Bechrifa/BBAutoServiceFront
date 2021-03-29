import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReglementClientService {

  constructor(private http: HttpClient) { }


  List() {
    return this.http.get(environment.api_url + '/api/ReglementClients');
  }
  Add(data) {
    return this.http.post(environment.api_url + '/api/ReglementClients', data);
  }
  Get(id) {
    return this.http.get(environment.api_url + '/api/ReglementClients/' + id);
  }
  Edit(data) {
    return this.http.put(environment.api_url + '/api/ReglementClients/' + data.id, data);
  }
}
