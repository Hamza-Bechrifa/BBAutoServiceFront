import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { FournisseurService } from '../../../services/fournisseur.service';
import { VoitureService } from '../../../services/Voiture.service';

@Component({
  selector: 'app-fournisseur-show',
  templateUrl: './fournisseur-show.component.html',
  styleUrls: ['./fournisseur-show.component.css']
})
export class FournisseurShowComponent implements OnInit {
  public id: string;
  fournisseur: any;
  Mouvements: any;
  tabToShow = "Detailles";

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fournisseurService: FournisseurService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fournisseurService.Get(this.id).subscribe(
      data => { this.fournisseur = data },
      (err) => { alert("erreur get fournisseur") });

    this.fournisseurService.getMouvements(this.id).subscribe(
      data => { this.Mouvements = data },
      err => { alert("erreur get mouvements") }
    )

    


  }

  edit() {
    this.router.navigate(['/fournisseur/edit/' + this.id]);
  }
  SetTabToShow(id) {
    this.tabToShow = id;
  }
  reglement() {
    this.router.navigate(['ReglementFournisseur/add', "PF", this.id]);
  }

}
