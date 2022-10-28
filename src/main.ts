/**
 * main.ts : Entry point in oop-ts application
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

import { StagiaireModel } from "./models/stagiaire-model";

export class Main {
    public constructor() {
        const stagiaire: StagiaireModel = new StagiaireModel();
        stagiaire.setBirthDate(new Date(2000, 5, 25));
        console.log(`stagiaire ${stagiaire.firstName} ${stagiaire.lastName} né le ${stagiaire.getBirthDate()}`);
    }
}

new Main();