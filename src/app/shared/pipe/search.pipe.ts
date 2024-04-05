import { Pipe, PipeTransform } from '@angular/core';
import { Notes } from '../interfaces/notes';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(notes:Notes[] , value:string): any[] {
    return notes.filter((notes)=>notes.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
  }

}
