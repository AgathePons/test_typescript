/**
 * stagiaire-modele.ts
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

import { Comparable } from "../interfaces/comparable";
import { Model } from "./model";
import { PoeModel } from "./poe-modele";
import { IPrintStagiaireStrategy } from "./strategies/i-print-stagiaire-strategy";
import { PrintNameLastnameStrategy } from "./strategies/print-name-lastname-strategy";

/**
 * StagiaireModel
 * @extends Model
 * @implements Comparable<StagiaireModel>
 */
export class StagiaireModel extends Model implements Comparable<StagiaireModel> {

    public firstName: string = '';
    public lastName: string = '';
    private birthDate: Date = new Date();
    private poe: PoeModel = new PoeModel();
    // we can define an inteface as type of object
    private printStrategy: IPrintStagiaireStrategy = new PrintNameLastnameStrategy();

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

    public compare(t: StagiaireModel): number {
        const meBirthDate: number = this.birthDate.getFullYear();
        const theirBirthDate: number = t.birthDate.getFullYear();
        if (meBirthDate > theirBirthDate) {
            return 1;
        }
        else if (meBirthDate < theirBirthDate) {
            return -1;
        }
        return 0;
    }

    setPrintStrategy(strategy: IPrintStagiaireStrategy): void {
        this.printStrategy = strategy;
    }

    // the toString method overrides the toString from Model
    /**
     * @override
     * @see Model::toString
     * @returns string
     */
    public toString(): string {
        return this.printStrategy.print();
    }
}