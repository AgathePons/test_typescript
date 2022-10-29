/**
 * main.ts : Entry point in oop-ts application
 * @author AgathePons 2022-10
 * @version 1.0.0
 */
import PoeModel from './models/poe-modele';
import StagiaireModel from './models/stagiaire-model';

const debug = require('debug')('main');

class Main {
  public constructor() {
    // init stagiaires
    const stagiaireAgathe: StagiaireModel = new StagiaireModel();
    stagiaireAgathe.firstName = 'Agathe';
    stagiaireAgathe.lastName = 'Pons';
    stagiaireAgathe.setBirthDate(new Date(1991, 2, 4));

    const stagiaireJeanMich: StagiaireModel = new StagiaireModel();
    stagiaireJeanMich.firstName = 'Jean-Mich';
    stagiaireJeanMich.lastName = 'Much';
    stagiaireJeanMich.setBirthDate(new Date(2025, 8, 14));
    stagiaireJeanMich.setBirthDate(new Date(1968, 8, 14));

    // init poe
    const poe: PoeModel = new PoeModel();
    poe.title = 'Fullstack Java Angular';

    // set poe to the stagiaire
    stagiaireAgathe.poe = poe;

    // try to success
    poe.setDates(new Date(2020, 3, 4), new Date(2019, 3, 6));
    poe.setDates(new Date(2020, 3, 4), new Date(2021, 3, 6));

    // set stagiaire to poe
    poe.addStagiaire(stagiaireAgathe);
    poe.addStagiaire(stagiaireJeanMich);
    poe.addStagiaire(stagiaireAgathe);
    debug(poe.listStagiaires());
    console.log(poe.listStagiaires());
  }
}

// eslint-disable-next-line no-new
new Main();
