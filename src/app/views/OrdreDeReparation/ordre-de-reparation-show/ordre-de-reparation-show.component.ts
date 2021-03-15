import { Component, OnInit } from '@angular/core';
import { OrdreDeReparationService } from '../../../services/ordre-de-reparation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ordre-de-reparation-show',
  templateUrl: './ordre-de-reparation-show.component.html',
  styleUrls: ['./ordre-de-reparation-show.component.css']
})
export class OrdreDeReparationShowComponent implements OnInit {
  public id: string;
  obj: Object;
  detaille: Object;
  constructor(private router: Router, private route: ActivatedRoute, private ordreDeReparationService: OrdreDeReparationService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ordreDeReparationService.Get(this.id).subscribe(
      data => { this.obj = data },
      (err) => { alert("erreur") });
    this.ordreDeReparationService.Getdetaille(this.id).subscribe(
      data => { this.detaille = data },
      (err) => { alert("erreur") });
  }

  edit() {
    this.router.navigate(['/ordreDeReparation/edit/' + this.id]);
  }

}

