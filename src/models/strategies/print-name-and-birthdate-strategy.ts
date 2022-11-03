/**
 * print-name-and-birthdate-strategy.ts : class
 * @author AgathePons 2022-11
 * @version 1.0.0
 */

import { StagiaireModel } from "../stagiaire-model";
import { IPrintStagiaireStrategy } from "./i-print-stagiaire-strategy";


export class PrintNameAndBirthdateStrategy implements IPrintStagiaireStrategy {
  print(stagiaire: StagiaireModel): string {
    return `${stagiaire.lastName} ${stagiaire.firstName}: ${stagiaire.getBirthDate().getDate()}/${stagiaire.getBirthDate().getMonth() + 1}/${stagiaire.getBirthDate().getFullYear()}`;
  }
}