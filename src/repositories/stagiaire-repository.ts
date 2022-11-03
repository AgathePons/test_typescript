/**
 * stagiaire-repository.ts
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

import { StagiaireModel } from "../models/stagiaire-model";
import { Repository } from "./repository";

// Because we want a type (see repository.ts), we have to specify the type here
export class StagiaireRepository extends Repository<StagiaireModel> {
  /**
   * add a stagiaire in collection
   * @override
   * @see Repository::add
   * @param StagiaireModel stagiaire to add
   */
   public add(item: StagiaireModel): void {
    if (!this.collection.includes(item)) {
      super.add(item); // super : ref à la class parent
    }
  }
}