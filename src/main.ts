/**
 * main.ts : Entry point in oop-ts application
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

import { PoeModel } from "./models/poe-modele";
import { StagiaireModel } from "./models/stagiaire-model";
import { PoeTypeModel } from "./models/poeType-model";

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

        // init poe types
        const poei: PoeTypeModel = new PoeTypeModel();
        poei.title = 'POEI';
        const poec: PoeTypeModel = new PoeTypeModel();
        poec.title ='POEC';
        console.log(`poei: ${poei.title}, poec: ${poec.title}`);
        
        // init poe
        const poe: PoeModel = new PoeModel;
        poe.title = 'Fullstack Java Angular';
        
        poe.setType(poei);
        poe.setType(poec);

        // try to success
        poe.setDates(new Date(2020, 3, 4), new Date(2021, 3, 6));

        // set stagiaire to poe
        stagiaireAgathe.setPoe(poe);
        stagiaireJeanMich.setPoe(poe);
        stagiaireAgathe.setPoe(poe);
        console.log(stagiaireAgathe.toString());
        console.log(poe.listStagiaires());
    }
}

new Main();