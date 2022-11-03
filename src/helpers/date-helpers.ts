/**
 * date-helpers.ts : class
 * @author AgathePons 2022-11
 * @version 1.0.0
 */

// static is a class function which can be used without instance the class (like Math.random or JSON.stringify...)
export class DateHelpers {

  public static toSlashEuropeanDate(date: Date): string {
    const dateDay = date.getDate();
    const dateMonth = date.getMonth() + 1;
    // we put a 0 before each day and month and with a slice(), we keep only the last two numbers 
    const stringDate = ('0' + dateDay).slice(-2) + '/' + ('0' + dateMonth).slice(-2) + '/' + date.getFullYear();
    return stringDate;
  }
  public static toSlashUSDate(date: Date): string {
    const dateDay = date.getDate().toString;
    const dateMonth = date.getMonth() + 1;
    // we put a 0 before each day and month and with a slice(), we keep only the last two numbers 
    // const stringDatee = date.getFullYear() + '/' + this.zeroFill(dateMonth).slice(-2)
    const stringDate = date.getFullYear() + '/' + ('0' + dateMonth).slice(-2) + '/' + ('0' + dateDay).slice(-2) + '/' + date.getFullYear();
    return stringDate;
  }

  public static toFriendlyFrenchDate(dateToBeautify: Date): string {
    const frenchDate = dateToBeautify.toLocaleDateString("fr-FR", {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    return frenchDate;
  }

  private static zeroFill(value: string): string {
    return `0${value}`;
  }
}