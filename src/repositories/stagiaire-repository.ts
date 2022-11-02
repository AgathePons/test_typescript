

import { StagiaireModel } from "../models/stagiaire-model";
import { Repository } from "./repository";

export class StagiaireRepository extends Repository {
  /**
   * add a stagiaire in collection
   * @override
   * @see Repository::add
   * @param StagiaireModel stagiaire to add
   */
   public add(item: StagiaireModel): void {
    if (!this.collection.includes(item)) {
      super.add(item);
    }
  }
}