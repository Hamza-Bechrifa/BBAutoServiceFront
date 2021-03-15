import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { VoitureService } from '../../../services/Voiture.service';

@Component({
  selector: 'app-voiture-edit',
  templateUrl: './voiture-edit.component.html',
  styleUrls: ['./voiture-edit.component.scss']
})
export class VoitureEditComponent implements OnInit {
  id: any;
  VoitureForm: any;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private voitureService: VoitureService) { }

  ngOnInit() {
    this.VoitureForm = this.fb.group({
      id:"",
      matricule: "",
      type: "",
      modele: "",
      dateMiseEnCirculation: "",
      vin: "",
      kilometrage: 0,
      client: 0

    });
    this.id = this.route.snapshot.paramMap.get('id');
    this.voitureService.voituresGet(this.id).subscribe(
      data => { this.VoitureForm.patchValue(data) },
      (err) => { alert("erreur") });

  }
  ModifierVoiture() {
    this.voitureService.voituresEdit(this.VoitureForm.value).subscribe(

      data => {
        this.router.navigate(['/voiture']);
      },
      err => { alert(err); }
    );
  }
}
