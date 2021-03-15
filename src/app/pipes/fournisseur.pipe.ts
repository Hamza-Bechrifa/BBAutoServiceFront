import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fournisseur'
})
export class FournisseurPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
