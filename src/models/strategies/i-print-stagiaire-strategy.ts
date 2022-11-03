/**
 * i-print-stagiaire-strategy.ts : interface
 * @author AgathePons 2022-11
 * @version 1.0.0
 */

import { StagiaireModel } from "../stagiaire-model";

export interface IPrintStagiaireStrategy {
  print(stagiaire: StagiaireModel): string;
}