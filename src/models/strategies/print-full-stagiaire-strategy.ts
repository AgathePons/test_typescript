/**
 * print-full-stagiaire-strategy.ts : class
 * @author AgathePons 2022-11
 * @version 1.0.0
 */

import { DateHelpers } from "../../helpers/date-helpers";
import { StagiaireModel } from "../stagiaire-model";
import { IPrintStagiaireStrategy } from "./i-print-stagiaire-strategy";

/**
 * PrintFullStagiaireStrategy
 * @implements IPrintStagiaireStrategy
 */
 export class PrintFullStagiaireStrategy implements IPrintStagiaireStrategy {
   public print(stagiaire: StagiaireModel): string {
     return `Stagiaire: ${stagiaire.lastName} ${stagiaire.firstName}: ${DateHelpers.toSlashEuropeanDate(stagiaire.getBirthDate())}\n-> ${stagiaire.getPoe().toString()}`;
   }
 }