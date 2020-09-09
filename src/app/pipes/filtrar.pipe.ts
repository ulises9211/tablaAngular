import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(myArr: any): any {
    
    const newArr2 = [...new Set(myArr)]

    return newArr2;
  }

}
