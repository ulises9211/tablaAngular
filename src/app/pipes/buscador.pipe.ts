import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const newData = [];
    for (const v of value) {
      if(v.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1){
        newData.push(v);
      }
    }
    return newData;
  }

}
