import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BonDeReceptionService {


  constructor(private http: HttpClient) {
  }

  List() {
    return this.http.get(environment.api_url + '/api/BonDeReceptions');
  }
  Add(data) {
    return this.http.post(environment.api_url + '/api/BonDeReceptions', data);
  }
  Get(id) {
    return this.http.get(environment.api_url + '/api/BonDeReceptions/' + id);
  }
  GetByArticle(id) {
    return this.http.get(environment.api_url + '/api/BonDeReceptions/GetByArticle/'+ id);
  }
  Edit(data) {
    return this.http.put(environment.api_url + '/api/BonDeReceptions/' + data.id, data);
  }
}
