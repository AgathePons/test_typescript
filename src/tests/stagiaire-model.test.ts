import StagiaireModel from '../models/stagiaire-model';
import PoeModel from '../models/poe-modele';

describe('StagiaireModel class', () => {
  const stagiaire = new StagiaireModel();
  stagiaire.firstName = 'firstName';
  stagiaire.lastName = 'lastName';

  test('should be instance of StagiaireModel', () => {
    expect(stagiaire).toBeInstanceOf(StagiaireModel);
  });

  test('firstName should be firstName', () => {
    expect(stagiaire.firstName).toBe('firstName');
  });
  test('lastName should be lastName', () => {
    expect(stagiaire.lastName).toBe('lastName');
  });

  test('poe should be instance of PoeModel', () => {
    stagiaire.poe = new PoeModel();
    expect(stagiaire.poe).toBeInstanceOf(PoeModel);
  });
});

describe('StagiaireModel methods', () => {
  const poe = new PoeModel();
  poe.title = "test";
  poe.setDates(new Date(2022, 4, 10), new Date(2023, 0, 15));

  const stagiaire = new StagiaireModel();
  stagiaire.firstName = 'firstName';
  stagiaire.lastName = 'lastName';
  stagiaire.poe = poe;
  stagiaire.setBirthDate(new Date(2000, 1, 5));
  stagiaire.setBirthDate(new Date(2025, 1, 5));

  test('setBirthDate: should be instance of Date', () => {
    expect(stagiaire.getBirthDate()).toBeInstanceOf(Date);
  });
  test('birthDate: should be 2000-1-5', () => {
    expect(stagiaire.getBirthDate().getDate()).toBe(5);
    expect(stagiaire.getBirthDate().getMonth()).toBe(1);
    expect(stagiaire.getBirthDate().getFullYear()).toBe(2000);
  });

  test('toString: should return', () => {
    expect(stagiaire.toString()).toBe(
      `
      firstName lastName
      5/2/2000
      test
      Début: 10/5/2022
      Fin: 15/1/2023
    `
    );
  });
});