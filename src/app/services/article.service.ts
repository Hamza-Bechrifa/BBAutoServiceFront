import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
      }

  articlesList() {
    return this.http.get(environment.api_url + '/api/Articles');
  }
  articlesAdd(article) {
    return this.http.post(environment.api_url + '/api/Articles', article);
  }
  articlesGet(id) {
    return this.http.get(environment.api_url + '/api/Articles/'+ id);
  }
  articlesEdit(article) {
    return this.http.put(environment.api_url + '/api/Articles/' + article.id, article);
  }
}
