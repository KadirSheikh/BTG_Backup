import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'noRedCard'
})
export class NoRedCardPipe implements PipeTransform {


  constructor(private sanitized: DomSanitizer) { }


  transform(value) {
    return value? value.replace(/#no_red_card#/g, " ") : value;
  }

}
