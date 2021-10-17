import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(tests, value) {
    return tests.filter(plane => {
      return plane.name.toLowerCase().includes(value.toLowerCase());
      console.log(tests, tests);
    });
  }

}
