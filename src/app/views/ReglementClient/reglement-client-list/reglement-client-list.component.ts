import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReglementClientService } from '../../../services/reglement-client.service';

@Component({
  selector: 'app-reglement-client-list',
  templateUrl: './reglement-client-list.component.html',
  styleUrls: ['./reglement-client-list.component.css']
})
export class ReglementClientListComponent implements OnInit {
  rcList: any;
  dtOptions =
    {
      "order": [0, 'desc']
    }

  constructor(private router: Router, private reglementClientService: ReglementClientService) {
  }

  ngOnInit() {

    this.reglementClientService.List().subscribe(
      data => {
        this.rcList = data;
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
