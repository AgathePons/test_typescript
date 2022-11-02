/**
 * modele.ts
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

// abstract: the abstract class cannot be instancied itself
export abstract class Model {
  public toString(): string {
    let output: string = '';
    for (let property in  this) {
      output += `${property} : ${this[property]} \n`
    }
    return output;
  }
}