import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSql'
})
export class DateSqlPipe implements PipeTransform {

  transform(value: string): string {
    
    if (typeof value == 'string') {
      return "20" + value.substr(0, 2) + "-" + value.substr(2, 2) + "-" + value.substr(4, 2) + " " +
        value.substr(6, 2) + ":" +
        value.substr(8, 2) + ":" +
        value.substr(10, 2)
        ;
      //return value.substr(4, 2) + "/" + value.substr(2, 2) + "/20" + value.substr(0, 2) + " " +
      //  value.substr(6, 2) + ":" +
      //  value.substr(8, 2) + ":" +
      //  value.substr(10, 2)
      //  ;
    }
    return '';
  }

}
