/**
 * print-name-and-birthdate-strategy.ts : class
 * @author AgathePons 2022-11
 * @version 1.0.0
 */

import { IPrintStagiaireStrategy } from "./i-print-stagiaire-strategy";


export class PrintNameAndBirthdateStrategy implements IPrintStagiaireStrategy {
  print(): string {
    return 'have to return name and birthdate';
  }
}