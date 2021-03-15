import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { FournisseurService } from '../../../services/fournisseur.service';

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {

  fournisseurList: any;

  constructor(
    private router: Router,
    private fournisseurService: FournisseurService) {
  }

  ngOnInit() {

    this.fournisseurService.List().subscribe(
      data => {
        console.log(data)
        this.fournisseurList = data;
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
  }
  showFournisseur(id) {
    this.router.navigate(['/fournisseur/show/' + id]);
  }
}
