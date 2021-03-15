import { Pipe, PipeTransform } from '@angular/core';
import { VoitureService } from '../services/Voiture.service';

@Pipe({
  name: 'article'
})
export class ArticlePipe implements PipeTransform {
  constructor(private voitureService: VoitureService) { }

  transform(value: any, ...args: any[]): any {
    this.voitureService.voituresGet(value).subscribe(data => {
      console.log(data)
      return data['matricule']
    }, err => { return value;}
        )
  }

}
