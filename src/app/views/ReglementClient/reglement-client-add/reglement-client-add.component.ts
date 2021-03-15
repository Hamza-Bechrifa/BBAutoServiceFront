import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdreDeReparationService } from '../../../services/ordre-de-reparation.service';
import { ClientService } from '../../../services/client.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reglement-client-add',
  templateUrl: './reglement-client-add.component.html',
  styleUrls: ['./reglement-client-add.component.css']
})
export class ReglementClientAddComponent implements OnInit {
  reglementClientForm: any;
  idDocument: any
  typeDocument: any
  ordreDeReparation: any
  client: any
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private ordreDeReparationService: OrdreDeReparationService,
    private clientService: ClientService
  ) { }
  
  ngOnInit() {
    this.typeDocument = this.route.snapshot.paramMap.get('typeDocument');
    this.idDocument = this.route.snapshot.paramMap.get('idDocument');
    if (this.typeDocument == 'OR') {
      this.ordreDeReparationService.Get(this.idDocument).subscribe(
        data => {
          this.ordreDeReparation = data
          this.loadClient(data["client"])
        },
        (err) => { alert("erreur") });

    }
    else if (this.typeDocument == 'PC') {
      this.loadClient(this.idDocument)
     
    }
    this.reglementClientForm = this.fb.group({
      client: this.idDocument,
      montant: 0,
      mode: "",
      dateOperation: "",
      dateReglement: ""
    });

  }
  async loadClient(id: any) {
    await this.clientService.clientsGet(id).subscribe(
      data => {
        this.client = data          
        },
        (err) => { alert("erreur") });
  }
  addReglement() {

  }

}
