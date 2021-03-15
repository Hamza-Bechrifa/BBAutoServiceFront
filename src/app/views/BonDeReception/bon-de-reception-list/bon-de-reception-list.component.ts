import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BonDeReceptionService } from '../../../services/bon-de-reception.service';

@Component({
  selector: 'app-bon-de-reception-list',
  templateUrl: './bon-de-reception-list.component.html',
  styleUrls: ['./bon-de-reception-list.component.css']
})
export class BonDeReceptionListComponent implements OnInit {
  brList: any;

  constructor(private router: Router, private bonDeReceptionService: BonDeReceptionService) {
  }

  ngOnInit() {

    this.bonDeReceptionService.List().subscribe(
      data => {
        this.brList = data;
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
  }
  show(id) {
    this.router.navigate(['/BonDeReception/show/' + id]);
  }

}
