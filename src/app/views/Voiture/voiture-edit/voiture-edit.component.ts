import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { VoitureService } from '../../../services/Voiture.service';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-voiture-edit',
  templateUrl: './voiture-edit.component.html',
  styleUrls: ['./voiture-edit.component.scss']
})
export class VoitureEditComponent implements OnInit {
  id: any;
  VoitureForm: any;
  clientList: any;
  clientListfiltred: any;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private voitureService: VoitureService, private clientService: ClientService) { }

  ngOnInit() {
    this.VoitureForm = this.fb.group({
      id:"",
      matricule: "",
      type: "",
      modele: "",
      dateMiseEnCirculation: "",
      vin: "",
      kilometrage: 0,
      client: 0,
      contact : ""

    });
    this.id = this.route.snapshot.paramMap.get('id');
    this.voitureService.Get(this.id).subscribe(
      data => { this.VoitureForm.patchValue(data) },
      (err) => { alert("erreur") });

    this.clientService.clientsList().subscribe(
      data => {
        this.clientList = data;
        this.clientListfiltred = data;
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );
  }
  searchClient(text) {
    text = text.toLowerCase()
    let result: string[] = [];
    for (let a of this.clientList) {
      if (a.nomPrenom.toLowerCase().indexOf(text) > -1) {
        result.push(a)
      }
    }
    this.clientListfiltred = result;
  }
  ModifierVoiture() {
    this.voitureService.Edit(this.VoitureForm.value).subscribe(

      data => {
        this.router.navigate(['/voiture']);
      },
      err => { alert(err); }
    );
  }
}
