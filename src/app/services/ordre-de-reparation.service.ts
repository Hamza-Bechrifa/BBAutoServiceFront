import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdreDeReparationService {

  constructor(private http: HttpClient) {
  }

  List() {
    return this.http.get(environment.api_url + '/api/OrdreDeReparations');
  }
  Add(data) {
    return this.http.post(environment.api_url + '/api/OrdreDeReparations', data);
  }
  Get(id) {
    return this.http.get(environment.api_url + '/api/OrdreDeReparations/' + id);
  }
  Getdetaille(id) {
    return this.http.get(environment.api_url + '/api/DetailleOrs/' + id);
  }
  GetByArticle(id) {
    return this.http.get(environment.api_url + '/api/OrdreDeReparations/GetByArticle/' + id);
  }
  Edit(data) {
    return this.http.put(environment.api_url + '/api/OrdreDeReparations/' + data.id, data);
  }
}
