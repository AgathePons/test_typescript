/**
 * stagiaire-repository.ts
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

import { Printable } from "../interfaces/printable";
import { StagiaireModel } from "../models/stagiaire-model";
import { Repository } from "./repository";

// Because we want a type (see repository.ts), we have to specify the type here
export class StagiaireRepository extends Repository<StagiaireModel> implements Printable {
  /**
   * add a stagiaire in collection
   * @override
   * @see Repository::add
   * @param item stagiaire to add
   */
   public add(item: StagiaireModel): void {
    if (!this.collection.includes(item)) {
      super.add(item); // super : ref à la class parent
    }
  }

  /**
   * toString method to display info for StagiaireRpository
   * @see Printable interface
   * @returns {string}
   */
  public toString(): string {
    let output: string = `Items: ${this.collection.length}`;
    if (super.hasElement()) {
      const firstItem: StagiaireModel = this.findFirst()!; // the use of ! means required not null
      output += `, first element is ${firstItem.toString()}`;
    }
    return output;
  }
}