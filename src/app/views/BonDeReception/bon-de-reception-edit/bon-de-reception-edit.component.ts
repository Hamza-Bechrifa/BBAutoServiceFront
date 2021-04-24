import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { BonDeReceptionService } from '../../../services/bon-de-reception.service';
import { FournisseurService } from '../../../services/fournisseur.service';
import { ReglementFournisseurService } from '../../../services/reglement-fournisseur.service';
import { VoitureService } from '../../../services/Voiture.service';

@Component({
  selector: 'app-bon-de-reception-edit',
  templateUrl: './bon-de-reception-edit.component.html',
  styleUrls: ['./bon-de-reception-edit.component.css']
})
export class BonDeReceptionEditComponent implements OnInit {
  id: any;
  formData: any;
  articleList: any;
  articleListFiltred: any;
  voitureList: any;
  voitureListFiltred: [];
  fournisseurList: any;
  fournisseurListfiltred: any;
  constructor(private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private bonDeReceptionService: BonDeReceptionService,
    private articleService: ArticleService,
    private fournisseurServive: FournisseurService,
    private voitureService: VoitureService,
    private reglementFournisseur: ReglementFournisseurService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.formData = this.fb.group({
      id: this.id,
      fournisseur: null,
      code: "",
      date: this.datetimeNow(),
      commentaireInterne: "",
      commentaireExterne: "",
      detailleBr: this.fb.array([])
    });
    this.bonDeReceptionService.Get(this.id).subscribe(
      data => {
        this.formData.patchValue(data)
      },
      err => {
        console.log(err);
        alert("erreur bon de reception introuvable");
      }
    );
    this.articleService.articlesList().subscribe(
      data => {
        this.articleList = data;
        this.articleListFiltred = data;
        this.getDetaillesBrs()
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
    this.voitureService.List().subscribe(
      data => {
        this.voitureList = data;
        this.voitureListFiltred = this.voitureList.filter(voiture => voiture.fournisseur == -1);
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
    this.fournisseurServive.List().subscribe(
      data => {
        this.fournisseurList = data;
        this.fournisseurListfiltred = data;

      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );

  }


  get detailleBrForms() {
    return this.formData.get('detailleBr') as FormArray;
  }

  adddetailleBr() {

    const detailleBR = this.fb.group(
      {
        "article": 0,
        "designation": "",
        "prixHt": 0,
        "quantite": 1,
        "remise": 0,
        "tva": 0,
        "totalTtc": 0
      });

    this.detailleBrForms.push(detailleBR);
  }

  deletedetailleBr(i) {
    this.detailleBrForms.removeAt(i);
  }

  ImprimerSansPaiement() {
    this.bonDeReceptionService.Add(this.formData.value).subscribe(

      data => {
        console.log("sucess", data)
        this.router.navigate(['BonDeReception/show', data["id"]]);
        // this.router.navigate(['Reglementfournisseur/add', "BR", data["id"]]);
      },
      err => { alert(err); }
    );
  }
  
  calculTtc(i) {
    let prixHt: number = this.detailleBrForms.at(i).get("prixHt").value;
    let quantite: number = this.detailleBrForms.at(i).get("quantite").value;
    let tva: number = prixHt * this.detailleBrForms.at(i).get("tva").value / 100;
    let remise: number = prixHt * this.detailleBrForms.at(i).get("remise").value / 100;

    this.detailleBrForms.at(i).patchValue({ "totalTtc": ((+prixHt + +tva - +remise) * quantite).toFixed(3) });
  }

  changePrix(i, event) {

    this.detailleBrForms.at(i).patchValue(
      {
        "prixHt": this.articleList.filter(a => a.id === event.value)[0]['prixHt'],
        "tva": this.articleList.filter(a => a.id === event.value)[0]['tva'],
        "designation": this.articleList.filter(a => a.id === event.value)[0]['designation'],
      });
  }

  voitureListChange(event) {
    console.log("fournisseur:", event);
    console.log(this.voitureList);
    this.voitureListFiltred = this.voitureList.filter(voiture => voiture.fournisseur == event.value);
  }
  voitureListdefault() {
    this.voitureListFiltred = this.voitureList;
  }
  articleListdefault() {
    this.articleListFiltred = this.articleList;
  }

  searchfournisseur(text) {
    text = text.toLowerCase()
    let result: string[] = [];
    for (let a of this.fournisseurList) {
      if (a.nomPrenom.toLowerCase().indexOf(text) > -1) {
        result.push(a)
      }
    }
    this.fournisseurListfiltred = result;
  }
  searchArticle(text) {
    text = text.toLowerCase()
    let result: string[] = [];
    for (let a of this.articleList) {
      if (a.reference.toLowerCase().indexOf(text) > -1 || a.designation.toLowerCase().indexOf(text) > -1) {
        result.push(a)
      }
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
      let prixHt: number = this.detailleBrForms.at(i).get("prixHt").value;
      let tva: number = this.detailleBrForms.at(i).get("tva").value / 100;

      prixHt = prixHt / (1 + tva);
      console.log(prixHt)
      this.detailleBrForms.at(i).patchValue({ "prixHt": prixHt.toFixed(3) });
      this.calculTtc(i);
    }
  }
  getDetaillesBrs() {
    this.bonDeReceptionService.Getdetaille(this.id).subscribe(
      (data : any[]) => {
        
        console.log(data);
        let i = 0
        data.forEach(element => {
          this.adddetailleBr()
          this.detailleBrForms.at(i).patchValue(element);
          this.detailleBrForms.at(i).patchValue(
            {

              "designation": this.articleList.filter(a => a.id === element["article"])[0]['designation'],
            });
          i++
        })

      },
      (err) => { alert("erreur") });

  }
  Edit() {
    this.bonDeReceptionService.Edit(this.formData.value).subscribe(

      data => {
        this.router.navigate(['/BonDeReception/show/' + this.id]);
      },
      err => { alert(err); }
    );
  }

}

