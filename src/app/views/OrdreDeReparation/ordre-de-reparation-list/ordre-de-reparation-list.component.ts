import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdreDeReparationService } from '../../../services/ordre-de-reparation.service';

@Component({
  selector: 'app-ordre-de-reparation-list',
  templateUrl: './ordre-de-reparation-list.component.html',
  styleUrls: ['./ordre-de-reparation-list.component.css']
})
export class OrdreDeReparationListComponent implements OnInit {
  orList: any;
  dtOptions = 
    {
  "order": [0, 'desc']
}
  
  constructor(private router: Router, private ordreDeReparationService: OrdreDeReparationService) {
  }

  ngOnInit() {
    
    this.ordreDeReparationService.List().subscribe(
      data => {
        this.orList = data;
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
  }
  show(id) {
    this.router.navigate(['/ordreDeReparation/show/' + id]);
  }




 
}
