/**
 * stagiaire-modele.ts
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

// eslint-disable-next-line import/no-cycle
import PoeModel from './poe-modele';

const debug = require('debug')('models:StagiaireModel');

class StagiaireModel {
  public firstName: string = '';

  public lastName: string = '';

  private birthDate: Date = new Date();

  public poe: PoeModel = new PoeModel();

  public setBirthDate(birthDate : Date): void {
    const today: Date = new Date();
    const birthDateYear: number = birthDate.getFullYear();
    if (today.getFullYear() > birthDateYear) {
      this.birthDate = birthDate;
      debug(`setBirthDate: to ${this.firstName} ${this.lastName} >> ${birthDate}`);
    } else {
      debug(`setBirthDate: to ${this.firstName} ${this.lastName} >> invalid birthDate`);
    }
  }

  public getBirthDate(): Date {
    return this.birthDate;
  }

  public toString(): string {
    return `
      ${this.firstName} ${this.lastName}
      ${this.birthDate.getDate()}/${this.birthDate.getMonth() + 1}/${this.birthDate.getFullYear()}
      ${this.poe.title}
      Début: ${this.poe.getStartDate().getDate()}/${this.poe.getStartDate().getMonth() + 1}/${this.poe.getStartDate().getFullYear()}
      Fin: ${this.poe.getEndDate().getDate()}/${this.poe.getEndDate().getMonth() + 1}/${this.poe.getEndDate().getFullYear()}
    `;
  }
}

export default StagiaireModel;
