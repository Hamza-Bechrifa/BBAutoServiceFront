import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clientList: any;

  constructor(private router: Router,private clientService: ClientService) {
  }

  ngOnInit() {

    this.clientService.clientsList().subscribe(
      data => {
        console.log(data)
        this.clientList = data;
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
  }
  showClient(id) {
    this.router.navigate(['/client/show/' + id]);
  }
}
