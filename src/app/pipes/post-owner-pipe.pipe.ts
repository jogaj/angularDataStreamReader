import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postOwnerPipe'
})
export class PostOwnerPipePipe implements PipeTransform {

  /**
   * Pipe to contact the post owner name and firstname
   *
   * @param value1 The first value
   * @param value2 The second value
   * @returns A string contactenation
   */
  transform(value1: string, value2: string): string {
    return `${value1} ${value2}`;
  }

}
