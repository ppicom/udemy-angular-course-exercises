import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: any[], ...args: any[]): any[] {
    const sortBy = args[0];

    return value.sort((a, b) => {
      if (a[sortBy] < a[sortBy]) return -1;
      if (a[sortBy] > a[sortBy]) return 1;
      return 0;
    });
  }
}
