import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../../../services/Voiture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.scss']
})
export class VoitureListComponent implements OnInit {
  VoitureList: any;

  constructor(private router: Router,private voitureService: VoitureService) {
  }

  ngOnInit() {

    this.voitureService.List().subscribe(
      data => {
        console.log(data)
        this.VoitureList = data;
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
  }
  showVoiture(id) {
    this.router.navigate(['/voiture/show/' + id]);
  }
}
