import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReglementClientService {

  constructor(private http: HttpClient) { }

  add(data) {
    return this.http.post(environment.api_url + '/api/ReglementClients', data);
  }
}
