/**
 * date-helpers.ts : class
 * @author AgathePons 2022-11
 * @version 1.0.0
 */

export class DateHelpers {
  public static toSlashEuropeanDate(date: Date): string {
    const dateDay = date.getDate();
    const dateMonth = date.getMonth() + 1;
    const stringDate = ('0' + dateDay).slice(-2) + '/' + ('0' + dateMonth).slice(-2) + '/' + date.getFullYear();
    return stringDate;
  }
}