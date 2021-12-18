import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { ClientService } from '../../../services/client.service';
import { DevisClientService } from '../../../services/devis-client.service';
import { VoitureService } from '../../../services/Voiture.service';

@Component({
  selector: 'app-devis-client-add',
  templateUrl: './devis-client-add.component.html',
  styleUrls: ['./devis-client-add.component.scss']
})
export class DevisClientAddComponent implements OnInit {

  formData: any;
  articleList: any;
  articleListFiltred: any;
  voitureList: any;
  voitureListFiltred: [];
  clientList: any;
  clientListfiltred: any;
 
  constructor(private router: Router,
    private fb: FormBuilder,
    private ordreDeReparationService: DevisClientService,
    private articleService: ArticleService,
    private clientServive: ClientService,
    private voitureService: VoitureService
  ) { }

  ngOnInit() {
    this.formData = this.fb.group({
      client: null,
      voiture: null,
      dateDocument: this.datetimeNow(),
      kilometrage: 0,
      commentaireInterne: "",
      commentaireExterne: "",
      detaille: this.fb.array([])
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

    this.adddetaille();
  }


  get detailleForms() {
    return this.formData.get('detaille') as FormArray;
  }

  adddetaille() {

    const detaille = this.fb.group(
      {
        "article": 0,
        "designation": "",
        "prixHt": 0,
        "quantite": 1,
        "remise": 0,
        "tva": 0,
        "totalTtc": 0
      });

    this.detailleForms.push(detaille);
  }

  deletedetaille(i) {
    this.detailleForms.removeAt(i);
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
  AddDevis() {
    this.ordreDeReparationService.Add(this.formData.value).subscribe(

      (data: any) => {
        console.log("sucess", data)
       
        this.router.navigate(['devisClient/show', data["id"]]);
          },
          err => {
            console.log("erreur paiement", err);
          }
        );
      
  }

  calculTtc(i) {
    let prixHt: number = this.detailleForms.at(i).get("prixHt").value;
    let quantite: number = this.detailleForms.at(i).get("quantite").value;
    let tva: number = prixHt * this.detailleForms.at(i).get("tva").value / 100;
    let remise: number = prixHt * this.detailleForms.at(i).get("remise").value / 100;

    this.detailleForms.at(i).patchValue({ "totalTtc": ((+prixHt + +tva - +remise) * quantite).toFixed(3) });
  }
  changePrix(i, event) {

    this.detailleForms.at(i).patchValue(
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
  HorsTaxToTTC(event: any, i: number) {
    console.log("********", event)
    if (event.code == "F9") {
      let prixHt: number = this.detailleForms.at(i).get("prixHt").value;
      let tva: number = this.detailleForms.at(i).get("tva").value / 100;

      prixHt = prixHt / (1 + tva);
      console.log(prixHt)
      this.detailleForms.at(i).patchValue({ "prixHt": prixHt.toFixed(3) });
      this.calculTtc(i);
    }
  }
  getTotalTTC() {
    let total = 0;
    this.formData.value.detaille.forEach(data =>
      total += parseFloat(data.totalTtc)
    )
    return total.toFixed(3);
  }
}
