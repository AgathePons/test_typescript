/**
 * print-full-stagiaire-strategy.ts : class
 * @author AgathePons 2022-11
 * @version 1.0.0
 */

 import { StagiaireModel } from "../stagiaire-model";
 import { IPrintStagiaireStrategy } from "./i-print-stagiaire-strategy";
 
 export class PrintFullStagiaireStrategy implements IPrintStagiaireStrategy {
   public print(stagiaire: StagiaireModel): string {
     return `Stagiaire: ${stagiaire.lastName} ${stagiaire.firstName}: ${stagiaire.getBirthDate().getDate()}/${stagiaire.getBirthDate().getMonth() + 1}/${stagiaire.getBirthDate().getFullYear()}\n-> ${stagiaire.getPoe().toString()}`;
   }
 }