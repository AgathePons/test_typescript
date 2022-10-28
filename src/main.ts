/**
 * main.ts : Entry point in oop-ts application
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

import { PoeModel } from "./models/poe-modele";
import { StagiaireModel } from "./models/stagiaire-model";

export class Main {
    public constructor() {

        // init stagiaire
        const stagiaire: StagiaireModel = new StagiaireModel();
        stagiaire.setBirthDate(new Date(1991, 2, 4));
        stagiaire.firstName = 'Agathe';
        stagiaire.lastName = 'Pons';

        // init poe
        const poe: PoeModel = new PoeModel;
        poe.title = 'Fullstack Java Angular';

        // set poe to the stagiaire
        stagiaire.poe = poe;

        // try to fail
        poe.setDates(new Date(2022, 3, 4), new Date(2021, 3, 6));
        console.log(poe.toString());
        // try to success
        poe.setDates(new Date(2020, 3, 4), new Date(2021, 3, 6));
        console.log(poe.toString());
    }
}

new Main();