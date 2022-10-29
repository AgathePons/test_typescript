/**
 * poe-modele.ts
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

// eslint-disable-next-line import/no-cycle
import StagiaireModel from './stagiaire-model';

const debug = require('debug')('models:PoeModel');

class PoeModel {
  public title: string = '';

  private startDate: Date = new Date();

  private endDate: Date = new Date();

  private stagiaires: StagiaireModel[] = [];

  public addStagiaire(stagiaire: StagiaireModel): void {
    if (!this.stagiaires.includes(stagiaire)) {
      this.stagiaires.push(stagiaire);
      debug(`addStagiaire: ${stagiaire.firstName} ${stagiaire.lastName} added`);
    } else {
      debug(`addStagiaire: ${stagiaire.firstName} ${stagiaire.lastName} already in this poe`);
    }
  }

  public listStagiaires(): string {
    debug('listStagiaires: called');
    let string: string = '';
    for (const stagiaire of this.stagiaires) {
      string += `${stagiaire.firstName} ${stagiaire.lastName}\n`;
    }
    return string;
  }

  public setDates(startDate: Date, endDate: Date): void {
    if (startDate.getTime() < endDate.getTime()) {
      this.startDate = startDate;
      this.endDate = endDate;
      debug('setDates: valid dates');
    } else {
      this.startDate = endDate;
      this.endDate = startDate;
      debug('setDates: invalid dates: invert start and end to get valid dates');
    }
  }

  public setStartDate(startDate : Date): void {
    if (this.endDate > startDate) {
      this.startDate = startDate;
    }
  }

  public getStartDate(): Date {
    return this.startDate;
  }

  public setEndDate(endDate : Date): void {
    if (this.startDate < endDate) {
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

export default PoeModel;
