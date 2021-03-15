import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FournisseurService } from '../../../services/fournisseur.service';

@Component({
  selector: 'app-fournisseur-add',
  templateUrl: './fournisseur-add.component.html',
  styleUrls: ['./fournisseur-add.component.css']
})
export class FournisseurAddComponent implements OnInit {

  clientForm: any;

  constructor(private router: Router, private fb: FormBuilder, private fournisseurService: FournisseurService) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
     
      nom: "",
      matriculeFiscale: "",
      telephone: "",
      adresse: "",
      solde: 0
    });

  }
  AjouterFournisseur() {
    this.fournisseurService.Add(this.clientForm.value).subscribe(

      data => {
        this.router.navigate(['/fournisseur']);
      },
      err => { alert(err); }
    );
  }
}
