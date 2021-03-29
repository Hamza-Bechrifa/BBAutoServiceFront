import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormArray } from '@angular/forms';
import { OrdreDeReparationService } from '../../../services/ordre-de-reparation.service';
import { ArticleService } from '../../../services/article.service';
import { VoitureService } from '../../../services/Voiture.service';
import { ClientService } from '../../../services/client.service';

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
  articleListFiltred: any;
  voitureList: any;
  voitureListFiltred: any;
  clientList: any;
  clientListfiltred: any;

  constructor(private router: Router,
    private fb: FormBuilder,
    private ordreDeReparationService: OrdreDeReparationService,
    private articleService: ArticleService,
    private voitureService: VoitureService,
    private clientService: ClientService,
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
    
    this.articleService.articlesList().subscribe(
      data => {
        this.articleList = data;
        this.articleListFiltred = data;
        this.getDetaillesOrs()
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
    this.voitureService.List().subscribe(
      data => {
        this.voitureList = data;
        this.voitureListFiltred = data;
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
    this.clientService.clientsList().subscribe(
      data => {
        this.clientList = data;
        this.clientListfiltred = data;

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
        "designation": "",
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

  Edit() {
    this.ordreDeReparationService.Edit(this.formData.value).subscribe(

      data => {
        this.router.navigate(['/ordreDeReparation']);
      },
      err => { alert(err); }
    );
  }

 

  voitureListChange(event) {
    console.log("client:", event);
    console.log(this.voitureList);
    this.voitureListFiltred = this.voitureList.filter(voiture => voiture.client == event.value);
  }
  searchClient(text) {
    text = text.toLowerCase()
    let result: string[] = [];
    for (let a of this.clientList) {
      if (a.nomPrenom.toLowerCase().indexOf(text) > -1) {
        result.push(a)
      }
    }
    this.clientListfiltred = result;
  }
  searchArticle(text) {
    text = text.toLowerCase()
    let splitedText = text.split(' ');
    let result: string[] = [];
    for (let a of this.articleList) {
      let add = true
      for (let word of splitedText) {
        if (a.reference.toLowerCase().indexOf(word) == -1 && a.designation.toLowerCase().indexOf(word) == -1) {
          add = false
        }
      }
      if (add)
        result.push(a)
    }
    this.articleListFiltred = result;
  }
  calculTtc(i) {
    let prixHt: number = this.detailleOrForms.at(i).get("prixHt").value;
    let quantite: number = this.detailleOrForms.at(i).get("quantite").value;
    let tva: number = prixHt * this.detailleOrForms.at(i).get("tva").value / 100;
    let remise: number = prixHt * this.detailleOrForms.at(i).get("remise").value / 100;

    this.detailleOrForms.at(i).patchValue({ "totalTtc": (+prixHt + +tva - +remise) * quantite });
  }
  changePrix(i, event) {

    this.detailleOrForms.at(i).patchValue(
      {
        "prixHt": this.articleList.filter(a => a.id === event.value)[0]['prixPublic'],
        "tva": this.articleList.filter(a => a.id === event.value)[0]['tva'],
        "designation": this.articleList.filter(a => a.id === event.value)[0]['designation'],
      });
  }

  articleListdefault() {
    this.articleListFiltred = this.articleList;
  }

  getDetaillesOrs() {
    this.ordreDeReparationService.Getdetaille(this.id).subscribe(
      data => {
        this.detaille = data;
        console.log(data);
        let i = 0
        this.detaille.forEach(element => {
          this.adddetailleOr()
          this.detailleOrForms.at(i).patchValue(element);
          this.detailleOrForms.at(i).patchValue(
            {

              "designation": this.articleList.filter(a => a.id === element["article"])[0]['designation'],
            });
          i++
        })

      },
      (err) => { alert("erreur") });

  }
}
