import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {

  clientForm: any;

  constructor(private router: Router, private fb: FormBuilder, private clientService: ClientService) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      nomPrenom: "",
      cin: "",
      telephone: "",
      adresse : ""

    });

  }
  AjouterClient() {
    this.clientService.clientsAdd(this.clientForm.value).subscribe(

      data => {
        this.router.navigate(['/client']);
      },
      err => { alert(err); }
    );
  }
}
