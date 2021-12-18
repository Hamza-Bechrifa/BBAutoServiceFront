import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { VoitureService } from '../../../services/Voiture.service';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-voiture-add',
  templateUrl: './voiture-add.component.html',
  styleUrls: ['./voiture-add.component.scss']
})
export class VoitureAddComponent implements OnInit {

  VoitureForm: any;
  clientList: any;
  clientListfiltred: any;
  constructor(private router: Router, private fb: FormBuilder, private VoitureService: VoitureService, private clientService: ClientService) { }

  ngOnInit() {
    this.VoitureForm = this.fb.group({
      
      matricule: "",
      type: "",
      modele: "",
      dateMiseEnCirculation: "",
      vin: "",
      kilometrage: 0,
      client: ""

    });
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
  AjouterVoiture() {
    this.VoitureService.Add(this.VoitureForm.value).subscribe(

      data => {
        this.router.navigate(['/voiture']);
      },
      err => { alert(err); }
    );
  }
}
