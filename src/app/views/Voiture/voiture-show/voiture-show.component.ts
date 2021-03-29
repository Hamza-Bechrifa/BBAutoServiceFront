import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../../../services/Voiture.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voiture-show',
  templateUrl: './voiture-show.component.html',
  styleUrls: ['./voiture-show.component.scss']
})
export class VoitureShowComponent implements OnInit {
  public id: string;
  voiture: any;
  tabToShow = "Detailles";
  constructor(private router: Router, private route: ActivatedRoute, private voitureService: VoitureService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.voitureService.Get(this.id).subscribe(
      data => { this.voiture = data },
      (err) => { alert("erreur") });
  }

  edit() {
    this.router.navigate(['/voiture/edit/' + this.id]);
  }
  SetTabToShow(id) {
    this.tabToShow = id;
  }
}
