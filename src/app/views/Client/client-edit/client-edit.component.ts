import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {
  clientForm: any;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private clientService: ClientService) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      id:"",
      nomPrenom: "",
      cin: "",
      telephone: "",
      adresse: ""
    });
    this.clientService.clientsGet(this.route.snapshot.paramMap.get('id')).subscribe(
      data => {
        this.clientForm.patchValue(data

        );
      }
      , err => alert("client inconnue")
    )
  }
  ModifierClient() {
    this.clientService.clientsEdit(this.clientForm.value).subscribe(
      data => {
        this.router.navigate(['/client']);
      },
      err => { alert(err); }
    );
  }

}
