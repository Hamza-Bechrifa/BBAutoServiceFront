import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../../../services/Voiture.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-voiture-show',
  templateUrl: './voiture-show.component.html',
  styleUrls: ['./voiture-show.component.scss']
})
export class VoitureShowComponent implements OnInit {
  public id: string;
  voiture: any;
  client: any;
  tabToShow = "Detailles";
  constructor(private router: Router, private route: ActivatedRoute, private voitureService: VoitureService, private clientService: ClientService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.voitureService.Get(this.id).subscribe(
      data => {
        this.voiture = data
        this.chargerClient(data['client']);
      },
      (err) => { alert("erreur") });
  }

  edit() {
    this.router.navigate(['/voiture/edit/' + this.id]);
  }
  SetTabToShow(id) {
    this.tabToShow = id;
  }
  chargerClient(id) {
    this.clientService.clientsGet(id).subscribe(
      data => {
        this.client = data

      },
      (err) => { alert("erreur") });
  }
}
