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
  constructor(private router: Router, private fb: FormBuilder, private VoitureService: VoitureService, private clientService: ClientService) { }

  ngOnInit() {
    this.VoitureForm = this.fb.group({
      
      matricule: "",
      type: "",
      modele: "",
      dateMiseEnCirculation: "",
      vin: "",
      kilometrage: 0,
      client: 0

    });
    this.clientService.clientsList().subscribe(
      data => {
        this.clientList = data;
      },
      (err) => {
        console.log(err);
        alert('Erreur système');
      }
    );

  }
  AjouterVoiture() {
    this.VoitureService.voituresAdd(this.VoitureForm.value).subscribe(

      data => {
        this.router.navigate(['/voiture']);
      },
      err => { alert(err); }
    );
  }
}
