import PoeModel from '../models/poe-modele';
import StagiaireModel from '../models/stagiaire-model';

describe('PoeModel class', () => {
  const poe = new PoeModel();
  poe.title = "test";
  poe.setDates(new Date(2020, 3, 4), new Date(2021, 3, 6));

  test('should be instance of PoeModel', () => {
    expect(poe).toBeInstanceOf(PoeModel);
  });

  test('title should be test', () => {
    expect(poe.title).toBe('test');
  });
});

describe('PoeModel methods', () => {
  const poe = new PoeModel();
  poe.title = "test";

  const stagiaire = new StagiaireModel();
  stagiaire.firstName = 'firstName';
  stagiaire.lastName = 'lastName';
  poe.addStagiaire(stagiaire);
  poe.addStagiaire(stagiaire);
  test('addStagiaire: should add a stagiaire if not already added', () => {
    expect(poe.listStagiaires()).toBe('firstName lastName\n');
  });

  poe.setDates(new Date(2020, 3, 4), new Date(2021, 3, 6));
  test('setDates: startDate and endDate should be instance of Date', () => {
    expect(poe.getStartDate()).toBeInstanceOf(Date);
    expect(poe.getEndDate()).toBeInstanceOf(Date);
  });
  test('setDates: startDate should be 2020-3-4', () => {
    expect(poe.getStartDate().getDate()).toBe(4);
    expect(poe.getStartDate().getMonth()).toBe(3);
    expect(poe.getStartDate().getFullYear()).toBe(2020);
  });
  test('setDates: endDate should be 2021-3-6', () => {
    expect(poe.getEndDate().getDate()).toBe(6);
    expect(poe.getEndDate().getMonth()).toBe(3);
    expect(poe.getEndDate().getFullYear()).toBe(2021);
  });

  poe.setDates(new Date(2021, 3, 6), new Date(2020, 3, 4));
  test('setDates: startDate should be 2020-3-4', () => {
    expect(poe.getStartDate().getDate()).toBe(4);
    expect(poe.getStartDate().getMonth()).toBe(3);
    expect(poe.getStartDate().getFullYear()).toBe(2020);
  });
  test('setDates: endDate should be 2021-3-6', () => {
    expect(poe.getEndDate().getDate()).toBe(6);
    expect(poe.getEndDate().getMonth()).toBe(3);
    expect(poe.getEndDate().getFullYear()).toBe(2021);
  });

  test('toString: should return', () => {
    expect(poe.toString()).toBe('test du 4/4/2020 au 6/4/2021');
    console.log(poe.toString())
  });
});
