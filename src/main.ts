/**
 * main.ts : Entry point in oop-ts application
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

import { PoeModel } from "./models/poe-modele";
import { StagiaireModel } from "./models/stagiaire-model";

export class Main {
    public constructor() {

        // init stagiaires
        const stagiaireAgathe: StagiaireModel = new StagiaireModel();
        stagiaireAgathe.setBirthDate(new Date(1991, 2, 4));
        stagiaireAgathe.firstName = 'Agathe';
        stagiaireAgathe.lastName = 'Pons';

        const stagiaireJeanMich: StagiaireModel = new StagiaireModel();
        stagiaireJeanMich.setBirthDate(new Date(1968, 8, 14));
        stagiaireJeanMich.firstName = 'Jean-Mich';
        stagiaireJeanMich.lastName = 'Much';

        // init poe
        const poe: PoeModel = new PoeModel;
        poe.title = 'Fullstack Java Angular';

        // set poe to the stagiaire
        stagiaireAgathe.poe = poe;

        // try to success
        poe.setDates(new Date(2020, 3, 4), new Date(2021, 3, 6));

        // set stagiaire to poe
        poe.addStagiaire(stagiaireAgathe);
        poe.addStagiaire(stagiaireJeanMich);
        poe.addStagiaire(stagiaireAgathe);
        console.log(poe.listStagiaires());
    }
}

new Main();