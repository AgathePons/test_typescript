/**
 * poe-modele.ts
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

 export class PoeModel {
    public title: string = '';
    private startDate: Date = new Date();
    private endDate: Date = new Date();

    public setDates(startDate: Date, endDate: Date): void {
        if (startDate.getTime() < endDate.getTime()) {
            this.startDate = startDate;
            this.endDate = endDate;
        }
        else {
            this.startDate = endDate;
            this.endDate = startDate;
        }
    }

    public setStartDate(startDate : Date): void {
        if (this.endDate > startDate ) {
            this.startDate = startDate;
        }
    }

    public getStartDate(): Date {
        return this.startDate;
    }

    public setEndDate(endDate : Date): void {
        if (this.startDate < endDate ) {
            this.endDate = endDate;
        }
    }

    public getEndDate(): Date {
        return this.endDate;
    }

    public toString(): string {
        return `
            ${this.title} du ${this.startDate.getDate()}/${this.startDate.getMonth() + 1}/${this.startDate.getFullYear()} au ${this.endDate.getDate()}/${this.endDate.getMonth() + 1}/${this.endDate.getFullYear()}
        `;
    }
}