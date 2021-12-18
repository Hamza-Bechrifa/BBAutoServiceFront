import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevisClientService {
  constructor(private http: HttpClient) {
  }

  List() {
    return this.http.get(environment.api_url + '/api/DevisClients');
  }
  Add(data) {
    return this.http.post(environment.api_url + '/api/DevisClients', data);
  }
  Get(id) {
    return this.http.get(environment.api_url + '/api/DevisClients/' + id);
  }
  Getdetaille(id) {
    return this.http.get(environment.api_url + '/api/DevisClients/GetDetaille/' + id);
  }
  GetByArticle(id) {
    return this.http.get(environment.api_url + '/api/DevisClients/GetByArticle/' + id);
  }
  Edit(data) {
    return this.http.put(environment.api_url + '/api/OrdreDeReparations/' + data.id, data);
  }
}
