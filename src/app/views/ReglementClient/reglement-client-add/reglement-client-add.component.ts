import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdreDeReparationService } from '../../../services/ordre-de-reparation.service';
import { ClientService } from '../../../services/client.service';
import { FormBuilder } from '@angular/forms';
import { ReglementClientService } from '../../../services/reglement-client.service';

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
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
    private ordreDeReparationService: OrdreDeReparationService,
    private clientService: ClientService,
    private reglementClientService: ReglementClientService
  ) { }
  
  ngOnInit() {
    this.reglementClientForm = this.fb.group({
      client: 0,
      montant: 0,
      mode: "espece",
      dateOperation: "",
      dateReglement: this.datetimeNow()
    });
    this.typeDocument = this.route.snapshot.paramMap.get('typeDocument');
    this.idDocument = this.route.snapshot.paramMap.get('idDocument');
    if (this.typeDocument == 'OR') {
      this.ordreDeReparationService.Get(this.idDocument).subscribe(
        data => {
          this.ordreDeReparation = data
          this.reglementClientForm.patchValue({ client: data["client"]})
          this.loadClient(data["client"])
        },
        (err) => { alert("erreur") });

    }
    else if (this.typeDocument == 'PC') {
      this.loadClient(this.idDocument)
      this.reglementClientForm.patchValue({ client: this.idDocument })
    }
   

  }
  async loadClient(id: any) {
    await this.clientService.clientsGet(id).subscribe(
      data => {
        this.client = data          
        },
        (err) => { alert("erreur") });
  }
  showOR() {
    this.router.navigate(['/ordreDeReparation/show/' + this.ordreDeReparation.id]);
  }
  async addReglement() {
    await this.reglementClientService.Add(this.reglementClientForm.value).subscribe(
      data => {
        if (this.ordreDeReparation)
          this.router.navigate(['/ordreDeReparation/show/' + this.ordreDeReparation.id]);
        else
          this.router.navigate(['/client/show/' + this.client.id]);
      }
    )
  }

  datetimeNow() {
    var now = new Date($.now())
      , year
      , month
      , date
      , hours
      , minutes
      , seconds
      ;

    year = now.getFullYear();
    month = now.getMonth().toString().length === 1 ? '0' + (now.getMonth() + 1).toString() : now.getMonth() + 1;
    date = now.getDate().toString().length === 1 ? '0' + (now.getDate()).toString() : now.getDate();
    hours = now.getHours().toString().length === 1 ? '0' + now.getHours().toString() : now.getHours();
    minutes = now.getMinutes().toString().length === 1 ? '0' + now.getMinutes().toString() : now.getMinutes();
    seconds = now.getSeconds().toString().length === 1 ? '0' + now.getSeconds().toString() : now.getSeconds();

    return year + '-' + month + '-' + date /*+ 'T' + hours + ':' + minutes + ':' + seconds*/;



  }

}
