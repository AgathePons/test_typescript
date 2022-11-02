/**
 * poeType-modele.ts
 * @author AgathePons 2022-10
 * @version 1.0.0
 */
// type E ou I une fois set, on peut plus modifier

export class PoeTypeModel {
  private _title: string = '';

  // we can use the get or set keyword in typescript, and when we try to access with foo.title, it wll use the get/set method by default
  public set title(title: string) {
    this._title = title;
  }
  public get title(): string {
    return this._title;
  }
}
