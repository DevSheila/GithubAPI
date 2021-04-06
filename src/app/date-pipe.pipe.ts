import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: any): number {
    let today: Date = new Date();
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    console.log(value)
    console.log(todayWithNoTime)
    var dateDifference = Math.abs(todayWithNoTime - value);
    const secondsInADay = 86400;

    var dateDifferenceSeconds = dateDifference * 0.001;
    var dateCounter = dateDifferenceSeconds / secondsInADay;
      console.log(dateDifference)
    if (dateCounter >= 1 && todayWithNoTime > value) {
      return dateCounter;
    } else {
      return 0;
    }
  }
}