import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { VoitureService } from '../../../services/Voiture.service';

@Component({
  selector: 'app-client-show',
  templateUrl: './client-show.component.html',
  styleUrls: ['./client-show.component.scss']
})
export class ClientShowComponent implements OnInit {
  id: string;
  client: any;
  Mouvements: any;
  voitures: any;
  tabToShow = "Detailles"
  dtOptions =
    {
      "order": [0, 'desc']
    }
  constructor(private router: Router,
              private route: ActivatedRoute,
              private clientService: ClientService,
              private voitureService: VoitureService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.clientService.clientsGet(this.id).subscribe(
      data => { this.client = data },
      (err) => { alert("erreur get client") });

    this.clientService.getMouvements(this.id).subscribe(
      data => { this.Mouvements = data },
      err => {alert("erreur get mouvements")}
    )

    this.voitureService.getByClient(this.id).subscribe(
      data => { this.voitures = data },
      err => {alert("erreur get voitures")}
    )


  }

  edit() {
    this.router.navigate(['/client/edit/' + this.id]);
  }
  showVoiture(id) {
    this.router.navigate(['/voiture/show/' + id]);
  }
  showDocument(id, type) {
    if (type == 'OR')
      this.router.navigate(['/ordreDeReparation/show/' + id]);
    else if (type == 'RC') 
      this.router.navigate(['/ReglementClient/show/' + id]);
    
  }
  reglement() {
    this.router.navigate(['ReglementClient/add', "PC", this.id]);
  }
  SetTabToShow(id) {
    this.tabToShow = id;
  }
}
