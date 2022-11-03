/**
 * print-name-lastname-strategy.ts : class
 * @author AgathePons 2022-11
 * @version 1.0.0
 */

import { StagiaireModel } from "../stagiaire-model";
import { IPrintStagiaireStrategy } from "./i-print-stagiaire-strategy";

export class PrintNameLastnameStrategy implements IPrintStagiaireStrategy {
  public print(stagiaire: StagiaireModel): string {
    return `${stagiaire.lastName} ${stagiaire.firstName}`;
  }
}