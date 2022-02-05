import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormArray } from '@angular/forms';
import { OrdreDeReparationService } from '../../../services/ordre-de-reparation.service';
import { ArticleService } from '../../../services/article.service';
import { VoitureService } from '../../../services/Voiture.service';
import { ClientService } from '../../../services/client.service';
import { ReglementClientService } from '../../../services/reglement-client.service';

@Component({
  selector: 'app-ordre-de-reparation-add',
  templateUrl: './ordre-de-reparation-add.component.html',
  styleUrls: ['./ordre-de-reparation-add.component.css']
})
export class OrdreDeReparationAddComponent implements OnInit {

  formData: any;
  articleList: any;
  articleListFiltred: any;
  voitureList: any;
  voitureListFiltred: [];
  clientList: any;
  clientListfiltred: any;
  @ViewChild('paymentModal', { static: false }) paymentModal;
  constructor(private router: Router,
    private fb: FormBuilder,
    private ordreDeReparationService: OrdreDeReparationService,
    private articleService: ArticleService,
    private clientServive: ClientService,
    private voitureService: VoitureService,
    private reglementClientService: ReglementClientService
  ) { }

  ngOnInit() {
    this.formData = this.fb.group({
      client: null,
      voiture: null,
      dateDocument: this.datetimeNow(),
      kilometrage: 0,
      commentaireInterne: "",
      commentaireExterne: "",
      detailleOr: this.fb.array([])
    });
    this.articleService.articlesList().subscribe(
      data => {
        this.articleList = data;
        this.articleListFiltred = data;
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
    this.voitureService.List().subscribe(
      data => {
        this.voitureList = data;
        this.voitureListFiltred = this.voitureList.filter(voiture => voiture.client == -1);
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
    this.clientServive.clientsList().subscribe(
      data => {
        this.clientList = data;
        this.clientListfiltred = data;

      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );

    this.adddetailleOr();
  }


  get detailleOrForms() {
    return this.formData.get('detailleOr') as FormArray;
  }

  adddetailleOr() {

    const detailleOr = this.fb.group(
      {
        "article": null,
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

  passerAuPaiement() {
    this.ordreDeReparationService.Add(this.formData.value).subscribe(

      data => {
        console.log("sucess", data)
        this.router.navigate(['ReglementClient/add', "OR", data["id"]]);
      },
      err => { alert(err); }
    );
  }
  payerEnEspeceEtImprimer() {
    this.ordreDeReparationService.Add(this.formData.value).subscribe(

      (data: any) => {
        console.log("sucess", data)
        this.reglementClientService.Add(
          {
            "client": data.client,
            "montant": data.totalTtc,
            "ordreDeReparation": data.id,
            "mode": "espece"
          }
        ).subscribe(
          data1 => {
            this.router.navigate(['ordreDeReparation/show', data["id"]]);
          },
          err => {
            console.log("erreur paiement",err);
          }
        );
      },
      err => { console.log(err); alert(err); }
    );
  }

  calculTtc(i) {
    let prixHt: number = this.detailleOrForms.at(i).get("prixHt").value;
    let quantite: number = this.detailleOrForms.at(i).get("quantite").value;
    let remise: number = prixHt * this.detailleOrForms.at(i).get("remise").value / 100;
    let tva: number = (prixHt-remise) * this.detailleOrForms.at(i).get("tva").value / 100;
    this.detailleOrForms.at(i).patchValue({ "totalTtc": ((+prixHt + +tva - +remise) * quantite).toFixed(3) });
  }
  changePrix(i, event) {

    this.detailleOrForms.at(i).patchValue(
      {
        "prixHt": this.articleList.filter(a => a.id === event.value)[0]['prixPublic'],
        "tva": this.articleList.filter(a => a.id === event.value)[0]['tva'],
        "designation": this.articleList.filter(a => a.id === event.value)[0]['designation'],
      });
  }

  voitureListChange(event) {
    //console.log("client:", event);
    //console.log(this.voitureList);
    //if (event = "all") {
    //  this.voitureListFiltred = this.voitureList;
    //}
    this.voitureListFiltred = this.voitureList.filter(voiture => voiture.client == event.value);
    
  }
  voitureListdefault() {
    this.voitureListFiltred = this.voitureList;
  }
  articleListdefault() {
    this.articleListFiltred = this.articleList;
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
  calculMarge(id) {


  }
  datetimeNow() {
    var now = new Date($.now())
      , year
      , month
      , date
      , hours
      , minutes
      , seconds
      ;

    year = now.getFullYear();
    month = now.getMonth().toString().length === 1 ? '0' + (now.getMonth() + 1).toString() : now.getMonth() + 1;
    date = now.getDate().toString().length === 1 ? '0' + (now.getDate()).toString() : now.getDate();
    hours = now.getHours().toString().length === 1 ? '0' + now.getHours().toString() : now.getHours();
    minutes = now.getMinutes().toString().length === 1 ? '0' + now.getMinutes().toString() : now.getMinutes();
    seconds = now.getSeconds().toString().length === 1 ? '0' + now.getSeconds().toString() : now.getSeconds();

    return year + '-' + month + '-' + date /*+ 'T' + hours + ':' + minutes + ':' + seconds*/;



  }
  HorsTaxToTTC(event: any,i: number) {
    console.log("********", event)
    if (event.code == "F9") {
      let prixHt: number = this.detailleOrForms.at(i).get("prixHt").value;
      let tva: number = this.detailleOrForms.at(i).get("tva").value / 100;

      prixHt = prixHt / (1 + tva);
      console.log(prixHt)
      this.detailleOrForms.at(i).patchValue({ "prixHt": prixHt.toFixed(3) });
      this.calculTtc(i);
    }
  }
  getTotalTTC() {
    let total = 0;
    this.formData.value.detailleOr.forEach(data =>
      total += parseFloat(data.totalTtc)
      )
    return total.toFixed(3);
  }
}
