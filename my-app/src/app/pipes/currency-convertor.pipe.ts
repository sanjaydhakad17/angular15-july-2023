import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor'
})
export class CurrencyConvertorPipe implements PipeTransform {

  transform(value: number, x:number, y:string): unknown {
    console.log(x, y);
    return value * x + " " + y;
  }

}
