/**
 * print-name-and-birthdate-strategy.ts : class
 * @author AgathePons 2022-11
 * @version 1.0.0
 */

import { DateHelpers } from "../../helpers/date-helpers";
import { StagiaireModel } from "../stagiaire-model";
import { IPrintStagiaireStrategy } from "./i-print-stagiaire-strategy";

/**
 * PrintNameAndBirthdateStrategy
 * @implements IPrintStagiaireStrategy
 */
export class PrintNameAndBirthdateStrategy implements IPrintStagiaireStrategy {
  print(stagiaire: StagiaireModel): string {
    return `${stagiaire.lastName} ${stagiaire.firstName}: ${DateHelpers.toSlashEuropeanDate(stagiaire.getBirthDate())}`;
  }
}