import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prasad'
})
export class PrasadPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0,10);
  }

}
