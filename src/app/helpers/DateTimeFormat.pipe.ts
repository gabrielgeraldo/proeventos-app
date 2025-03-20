import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../Util/constants';

@Pipe({
  name: 'DateFormat'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    // console.log(Constants.DATE_TIME_FMT);
    // console.log(value);

    return super.transform(value, Constants.DATE_TIME_FMT);
  }

}
