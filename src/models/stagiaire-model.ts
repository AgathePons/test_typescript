/**
 * stagiaire-modele.ts
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

import { Model } from "./model";
import { PoeModel } from "./poe-modele";

export class StagiaireModel extends Model {
    public firstName: string = '';
    public lastName: string = '';
    private birthDate: Date = new Date();
    private poe: PoeModel = new PoeModel();

    public setBirthDate(birthDate : Date): void {
        const today: Date = new Date();
        const birthDateYear: number = birthDate.getFullYear();
        if (today.getFullYear() > birthDateYear ) {
            this.birthDate = birthDate;
        }
    }

    public getBirthDate(): Date {
        return this.birthDate;
    }

    public setPoe(poe: PoeModel): void {
        this.poe = poe;
        this.poe.addStagiaire(this);
    }

    // the toString method overrides the toString from Model
    /**
     * @override
     * @see Model::toString
     * @returns string
     */
    public toString(): string {
        return `
            ${this.firstName} ${this.lastName} : ${this.birthDate.getDate()}/${this.birthDate.getMonth() + 1}/${this.birthDate.getFullYear()}
            dans la POE ${this.poe.toString()}
        `;
    }
}