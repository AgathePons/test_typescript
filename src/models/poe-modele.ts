/**
 * poe-modele.ts
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

import { Model } from "./model";
import { PoeTypeModel } from "./poeType-model";
import { StagiaireModel } from "./stagiaire-model";

 export class PoeModel extends Model {
    public title: string = '';
    private startDate: Date = new Date();
    private endDate: Date = new Date();

    private stagiaires: StagiaireModel[] = []; // Array<StagiaireModel>

    private poeType: PoeTypeModel | undefined = undefined;

    public setType(poeType: PoeTypeModel): void {
        if (this.poeType === undefined) {
            this.poeType = poeType;
        }
    }

    public getType(): PoeTypeModel | undefined {
        return this.poeType;
    }

    public addStagiaire(stagiaire: StagiaireModel): void {
        if (!this.stagiaires.includes(stagiaire))
        this.stagiaires.push(stagiaire);
    }

    public listStagiaires(): string {
        let output: string = `Liste des stagiaires de la ${this.poeType?.title} ${this.title}:\n`;
        if (this.stagiaires.length) {
            for (let stagiaire of this.stagiaires) {
                output += `- ${stagiaire.firstName} ${stagiaire.lastName}\n`;
            }
        }
        else {
            output = `Any inten in ${this.title}`;
        }
        
        return output;
    }

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

    public getStartDate(): Date {
        return this.startDate;
    }

    public getEndDate(): Date {
        return this.endDate;
    }

    /**
     * @override
     * @see Model::toString
     * @returns string
     */
    public toString(): string {
        return `(${this.poeType?.title}) ${this.title} du ${this.startDate.getDate()}/${this.startDate.getMonth() + 1}/${this.startDate.getFullYear()} au ${this.endDate.getDate()}/${this.endDate.getMonth() + 1}/${this.endDate.getFullYear()}`;
    }
}