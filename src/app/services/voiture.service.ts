import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {


  constructor(private http: HttpClient) {
  }

  List() {
    return this.http.get(environment.api_url + '/api/voitures');
  }
  Add(voiture) {
    return this.http.post(environment.api_url + '/api/voitures', voiture);
  }
  Get(id) {
    return this.http.get(environment.api_url + '/api/voitures/' + id);
  }
  Edit(voiture) {
    return this.http.put(environment.api_url + '/api/voitures/' + voiture.id, voiture);
  }

  getByClient(id) {
    return this.http.get(environment.api_url + '/api/voitures/getByClient/' + id);
  }
}
