import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {


  constructor(private http: HttpClient) {
  }

  voituresList() {
    return this.http.get(environment.api_url + '/api/voitures');
  }
  voituresAdd(voiture) {
    return this.http.post(environment.api_url + '/api/voitures', voiture);
  }
  voituresGet(id) {
    return this.http.get(environment.api_url + '/api/voitures/' + id);
  }
  voituresEdit(voiture) {
    return this.http.put(environment.api_url + '/api/voitures/' + voiture.id, voiture);
  }

  getByClient(id) {
    return this.http.get(environment.api_url + '/api/voitures/getByClient/' + id);
  }
}
