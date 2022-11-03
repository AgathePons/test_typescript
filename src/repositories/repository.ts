/**
 * poe-modele.ts
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

// protected : visible in this class and the classes that extend this class
export abstract class Repository {
  protected collection: Array<any> = [];

  /**
   * get  collection
   * @returns [] the collection
   */
  public getCollection(): Array<any> {
    return this.collection;
  }

  /**
   * get the size of collection
   * @returns number return number of items in collection
   */
  public getSize(): number {
    return this.collection.length;
  }

  /**
   * find first item of collection
   * @returns <any> first item of collection
   */
  public findFirst(): any {
    if (this.hasElement()) {
      return this.collection[0];
    }
  }

  /**
   * find last item of collection
   * @returns <any> last item of collection
   */
  public findLast(): any {
    if (this.hasElement()) {
      return this.collection[this.collection.length - 1];
    }
    
  }

  /**
   * find an item of collection by index
   * @param index index of the item to find
   * @returns item to find
   */
  public find(index: number): any {
    if (index < this.getSize())
    return this.collection[index];
  }

  /**
   * add an item in collection
   * @param item item to add
   */
  public add(item: any): void {
    this.collection.push(item);
  }

  /**
   * remove an item in collection
   * @param item item to remove if exists
   */
  public remove(item: any): void {
    if (this.collection.includes(item)) {
      this.collection.splice(this.collection.indexOf(item), 1);
    }
  }

  private hasElement(): boolean {
    return this.getSize() > 0;
  }
}