import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormArray } from '@angular/forms';
import { OrdreDeReparationService } from '../../../services/ordre-de-reparation.service';
import { ArticleService } from '../../../services/article.service';
import { VoitureService } from '../../../services/Voiture.service';

@Component({
  selector: 'app-ordre-de-reparation-edit',
  templateUrl: './ordre-de-reparation-edit.component.html',
  styleUrls: ['./ordre-de-reparation-edit.component.css']
})
export class OrdreDeReparationEditComponent implements OnInit {
  obj: any;
  detaille: any;
  formData: any;
  articleList: any;
  voitureList: any;
  constructor(private router: Router,
    private fb: FormBuilder,
    private ordreDeReparationService: OrdreDeReparationService,
    private articleService: ArticleService,
    private voitureService: VoitureService,
    private route: ActivatedRoute) { }
    id: any;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formData = this.fb.group({
      id: this.id,
      client: null,
      voiture: null,
      dateDocument: "2021-01-23",
      kilometrage: 0,
      commentaireInterne: "",
      commentaireExterne: "",
      detailleOr: this.fb.array([])
    });
    this.ordreDeReparationService.Get(this.id).subscribe(
      data => {
        this.obj = data;
        this.obj['dateDocument'] = this.obj['dateDocument'].substring(0, 10) 
        this.formData.patchValue(this.obj);
      },
      (err) => { alert("erreur") });
    this.ordreDeReparationService.Getdetaille(this.id).subscribe(
      data => {
        this.detaille = data;
        console.log(data);
        let i = 0
        this.detaille.forEach(element=> {
          this.adddetailleOr()
          this.detailleOrForms.at(i).patchValue(element)

        })
      
      },
      (err) => { alert("erreur") });
   
    this.articleService.articlesList().subscribe(
      data => {
        this.articleList = data;
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
    this.voitureService.voituresList().subscribe(
      data => {
        this.voitureList = data;
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
  }


  get detailleOrForms() {
    return this.formData.get('detailleOr') as FormArray;
  }
  calculMarge(id) {}
  adddetailleOr() {

    const detailleOr = this.fb.group(
      {
        "article": 0,
        "prixHt": 0,
        "quantite": 1,
        "remise": 0,
        "tva": 0,
        "totalTtc": 0
      });

    this.detailleOrForms.push(detailleOr);
  }

  deletedetailleOr(i) {
    this.detailleOrForms.removeAt(i);
  }

  add() {
    this.ordreDeReparationService.Edit(this.formData.value).subscribe(

      data => {
        this.router.navigate(['/ordreDeReparation']);
      },
      err => { alert(err); }
    );
  }

  calculTtc(i) {
    let prixHt: number = this.detailleOrForms.at(i).get("prixHt").value;
    let quantite: number = this.detailleOrForms.at(i).get("quantite").value;
    let tva: number = prixHt * this.detailleOrForms.at(i).get("tva").value / 100;
    let remise: number = prixHt * this.detailleOrForms.at(i).get("remise").value / 100;

    this.detailleOrForms.at(i).patchValue({ "totalTtc": (+prixHt + +tva - +remise) * quantite });
  }

}
