import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {
  articleForm: any;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private articleService: ArticleService) { }

  ngOnInit() {
    this.articleForm = this.fb.group({
      id: "",
      reference: "",
      designation: "",
      prixHt: 0,
      tva: 19,
      fodec: 0,
      prixTTc: 0,
      marge: 25,
      prixPublic: 0,
      stockInitial: 0,
      stockReel: 0,
      stockAlerte: 0,
      type: "",
      referenceOrigine: "",
      marque: "",
      emplacement: ""
    });
    this.articleService.articlesGet(this.route.snapshot.paramMap.get('id')).subscribe(
      (data: any )=> {
        console.log(data)
        this.articleForm.patchValue(data
          
        );
        this.articleForm.patchValue({
          type : data.type==='true'
        })
      }
      , err => alert("article inconnue")
    )
  }
  saveChanges() {
    this.articleForm.patchValue({
      stockReel: this.articleForm.value.stockInitial
    });
    this.articleService.articlesEdit(this.articleForm.value).subscribe(

      data => {
        this.router.navigate(['/article']);
      },
      err => { alert(err); }
    );
  }
  calculTtc() {
    let prixHt: number = this.prixHt.value;
    let tva: number = this.prixHt.value * this.tva.value / 100;
    let fodec: number = this.prixHt.value * this.fodec.value / 100;

    this.articleForm.patchValue({
      prixTTc: +prixHt + +tva + +fodec
    });
    this.calculPrixPublic();
  }
  calculHT() {

    let calculedHt = this.prixTTc.value / (1 + this.tva.value / 100) / (1 + this.fodec.value / 100);
    this.articleForm.patchValue({
      prixHt: calculedHt
    });

    this.calculPrixPublic();
  }
  calculPrixPublic() {

    let marge: number = this.prixHt.value * this.marge.value / 100;
    let prixTTc = this.articleForm.value.prixTTc;
    this.articleForm.patchValue({
      prixPublic: prixTTc + marge
    });
  }
  calculMarge() {
    let calculedMarge = ((this.prixPublic.value - this.prixTTc.value) / this.prixHt.value) * 100;

    this.articleForm.patchValue({
      marge: calculedMarge
    });
  }
  get prixHt() { return this.articleForm.get('prixHt') };
  get prixTTc() { return this.articleForm.get('prixTTc') };
  get tva() { return this.articleForm.get('tva') };
  get fodec() { return this.articleForm.get('fodec') };
  get marge() { return this.articleForm.get('marge') };
  get prixPublic() { return this.articleForm.get('prixPublic') };
}

