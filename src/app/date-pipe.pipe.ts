import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
  pure: false
})
export class DatePipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: any, args?:any){
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) 
          return 'Created Just Now';
      const intervals: any = {
          year: 31536000,
          month: 2592000,
          week: 604800,
          day: 86400,
          hour: 3600,
          minute: 60,
          second: 1
      };
      let counter;
      for (const i in intervals) {
          counter = Math.floor(seconds / intervals[i]);
          if (counter > 0)
              if (counter === 1) {
                  return counter + ' ' + i + ' ago';
              } else {
                  return counter + ' ' + i + 's ago';
              }
      }
    }
    return value;
  }
}