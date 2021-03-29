import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { BonDeReceptionService } from '../../../services/bon-de-reception.service';
import { OrdreDeReparationService } from '../../../services/ordre-de-reparation.service';

@Component({
  selector: 'app-article-show',
  templateUrl: './article-show.component.html',
  styleUrls: ['./article-show.component.scss']
})
export class ArticleShowComponent implements OnInit {
  public id: string;
  article: any;
  listeAchat: any;
  listeVente: any;
  tabToShow = "Detailles"
  constructor(private router: Router, private route: ActivatedRoute,
    private articleService: ArticleService,
    private bonDeReceptionService: BonDeReceptionService,
    private ordreDeReparationService: OrdreDeReparationService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.articleService.articlesGet(this.id).subscribe(
      data => { this.article = data },
      (err) => { alert("erreur") });
    this.bonDeReceptionService.GetByArticle(this.id).subscribe(
      data => { this.listeAchat = data },
      (err) => { alert("erreur") });
    this.ordreDeReparationService.GetByArticle(this.id).subscribe(
      data => { this.listeVente = data },
      (err) => { alert("erreur") });
  }

  edit() {
        this.router.navigate(['/article/edit/' + this.id]);
  }
  SetTabToShow(id) {
    this.tabToShow = id;
  }
  orShow(id) {
    this.router.navigate(['/ordreDeReparation/show/' + id]);
  }
  brShow(id) {
    this.router.navigate(['/BonDeReception/show/' + id]);
  }
}

