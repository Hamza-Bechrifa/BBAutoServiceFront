import { Pipe, PipeTransform } from '@angular/core';
import { VoitureService } from '../services/Voiture.service';

@Pipe({
  name: 'voiture'
})
export class VoiturePipe implements PipeTransform {
  constructor(private voitureService: VoitureService) { }
  matricule: any;
  transform(value: any, ...args: any[]): any {
   
    const promise1 = new Promise((resolve, reject) => {
      this.voitureService.Get(value).subscribe(data => {
        console.log(data['matricule'])
        this.matricule= data['matricule']
      }, err =>
      { return value; }
      )
    });

    promise1.then((value) => {
      return this.matricule;
    });
    
    
  }
  getPromise() { }
}
