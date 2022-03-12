import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurService } from '../../../services/fournisseur.service';

@Component({
  selector: 'app-fournisseur-edit',
  templateUrl: './fournisseur-edit.component.html',
  styleUrls: ['./fournisseur-edit.component.css']
})
export class FournisseurEditComponent implements OnInit {
  fournisseurForm: any;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private fournisseurService: FournisseurService) { }

  ngOnInit() {
    this.fournisseurForm = this.fb.group({
      id:"",
      nom: "",
      matriculeFiscale: "",
      telephone: "",
      adresse: "",
      solde: 0,
      marge: 25
    });
    this.fournisseurService.Get(this.route.snapshot.paramMap.get('id')).subscribe(
      data => {
        this.fournisseurForm.patchValue(data

        );
      }
      , err => alert("fournisseur inconnue")
    )
  }
  ModifierFournisseur() {
    this.fournisseurService.Edit(this.fournisseurForm.value).subscribe(
      data => {
        this.router.navigate(['/fournisseur']);
      },
      err => { alert(err); }
    );
  }

}
