/**
 * poe-modele.ts
 * @author AgathePons 2022-10
 * @version 1.0.0
 */

// protected : visible in this class and the classes that extend this class
// <T> the T means we want to have a specifique type (defined when instancied), the class has became generic
export abstract class Repository<T> {
  protected collection: Array<T> = [];

  /**
   * get  collection
   * @returns [] the collection
   */
  public getCollection(): Array<T> {
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
  public findFirst(): T | null {
    if (this.hasElement()) {
      return this.collection[0];
    }
    return null;
  }

  /**
   * find last item of collection
   * @returns <any> last item of collection
   */
  public findLast(): T | null {
    if (this.hasElement()) {
      return this.collection[this.collection.length - 1];
    }
    return null;
  }

  /**
   * find an item of collection by index
   * @param index index of the item to find
   * @returns item to find
   */
  public find(index: number): T | null {
    if (index < this.getSize()) {
      return this.collection[index];
    }
    return null;
  }

  /**
   * add an item in collection
   * @param item item to add
   */
  public add(item: T): void {
    this.collection.push(item);
  }

  /**
   * remove an item in collection
   * @param item item to remove if exists
   */
  public remove(item: T): void {
    if (this.collection.includes(item)) {
      this.collection.splice(this.collection.indexOf(item), 1);
    }
  }

  private hasElement(): boolean {
    return this.getSize() > 0;
  }
}