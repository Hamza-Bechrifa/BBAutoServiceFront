import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BonDeReceptionService } from '../../../services/bon-de-reception.service';
import { FournisseurService } from '../../../services/fournisseur.service';

@Component({
  selector: 'app-bon-de-reception-show',
  templateUrl: './bon-de-reception-show.component.html',
  styleUrls: ['./bon-de-reception-show.component.css']
})
export class BonDeReceptionShowComponent implements OnInit {
  bonDeReception: any
  deteillesBr: any
  fournisseur: any
  id:any
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fournisseurService: FournisseurService,
    private bonDeReceptionService: BonDeReceptionService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.bonDeReceptionService.Get(this.id).subscribe(
      data => {
        this.bonDeReception = data
        this.fournisseurService.Get(data['fournisseur']).subscribe(
          data => {
            this.fournisseur = data
          },
          err => {
            alert(err.error)
          }

        )
      },
      err => {
        alert(err.error)
      }
    )
  }
  getDetailles(id) {
    this.bonDeReceptionService;
  }

}
