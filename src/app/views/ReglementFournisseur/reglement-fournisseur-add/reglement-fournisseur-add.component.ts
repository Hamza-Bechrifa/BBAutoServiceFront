import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurService } from '../../../services/fournisseur.service';
import { OrdreDeReparationService } from '../../../services/ordre-de-reparation.service';
import { ReglementFournisseurService } from '../../../services/reglement-fournisseur.service';

@Component({
  selector: 'app-reglement-fournisseur-add',
  templateUrl: './reglement-fournisseur-add.component.html',
  styleUrls: ['./reglement-fournisseur-add.component.css']
})
export class ReglementFournisseurAddComponent implements OnInit {
  reglementFournisseurForm: any;
  idDocument: any
  typeDocument: any
  ordreDeReparation: any
  fournisseur: any
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
    private ordreDeReparationService: OrdreDeReparationService,
    private fournisseurService: FournisseurService,
    private reglementFournisseurService: ReglementFournisseurService
  ) { }

  ngOnInit() {
    this.reglementFournisseurForm = this.fb.group({
      fournisseur: 0,
      montant: 0,
      mode: "espece",
      dateOperation: "",
      dateReglement: this.datetimeNow()
    });
    this.typeDocument = this.route.snapshot.paramMap.get('typeDocument');
    this.idDocument = this.route.snapshot.paramMap.get('idDocument');
    if (this.typeDocument == 'BR') {
      this.ordreDeReparationService.Get(this.idDocument).subscribe(
        data => {
          this.ordreDeReparation = data
          this.reglementFournisseurForm.patchValue({ fournisseur: data["fournisseur"] })
          this.loadFournisseur(data["fournisseur"])
        },
        (err) => { alert("erreur") });

    }
    else if (this.typeDocument == 'PF') {
      this.loadFournisseur(this.idDocument)
      this.reglementFournisseurForm.patchValue({ fournisseur: this.idDocument })
    }


  }
  async loadFournisseur(id: any) {
    await this.fournisseurService.Get(id).subscribe(
      data => {
        this.fournisseur = data
      },
      (err) => { alert("erreur") });
  }
  showOR() {
    this.router.navigate(['/ordreDeReparation/show/' + this.ordreDeReparation.id]);
  }
  async addReglement() {
    await this.reglementFournisseurService.Add(this.reglementFournisseurForm.value).subscribe(
      data => {
        if (this.ordreDeReparation)
          this.router.navigate(['/ordreDeReparation/show/' + this.ordreDeReparation.id]);
        else
          this.router.navigate(['/fournisseur/show/' + this.fournisseur.id]);
      }
    )
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

}
