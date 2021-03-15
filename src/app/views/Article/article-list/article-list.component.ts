import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleListComponent implements OnInit {
  articleList: any;
  
  constructor(private router: Router,private articleService: ArticleService) {
  }

  ngOnInit() {
    
    this.articleService.articlesList().subscribe(
      data => {
      this.articleList = data;
    },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
  }
  showArticle(id) {
    this.router.navigate(['/article/show/'+ id]);
  }
}
