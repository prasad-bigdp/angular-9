import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutdesc'
})
export class CutdescPipe implements PipeTransform {

  transform(value:string, ...args: unknown[]): unknown {
    return value.substring(0,50)+"....";
  }

}
