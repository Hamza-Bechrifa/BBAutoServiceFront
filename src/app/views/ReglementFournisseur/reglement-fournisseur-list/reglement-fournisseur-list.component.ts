import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReglementClientService } from '../../../services/reglement-client.service';
import { ReglementFournisseurService } from '../../../services/reglement-fournisseur.service';

@Component({
  selector: 'app-reglement-fournisseur-list',
  templateUrl: './reglement-fournisseur-list.component.html',
  styleUrls: ['./reglement-fournisseur-list.component.css']
})
export class ReglementFournisseurListComponent implements OnInit {
  data: any;
  dtOptions =
    {
      "order": [0, 'desc']
    }

  constructor(private router: Router, private reglementFournisseurService: ReglementFournisseurService) {
  }

  ngOnInit() {

    this.reglementFournisseurService.List().subscribe(
      data => {
        this.data = data;
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
  }
  show(id) {
    this.router.navigate(['/ReglementClient/show/' + id]);
  }





}
