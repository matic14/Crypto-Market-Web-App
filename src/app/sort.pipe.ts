import { Pipe, PipeTransform } from '@angular/core';
import { sortBy } from 'lodash';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  // transform(value: any[], order = '', column: string = ''): any[] {
  //   if (!value || order === '' || !order) { return value; } // no array
  //   if (!column || column === '') { return sortBy(value); } // sort 1d array
  //   if (value.length <= 1) { return value; } // array with only one item
  //   return _.orderBy(value, [column], [order]);
  // }

}
