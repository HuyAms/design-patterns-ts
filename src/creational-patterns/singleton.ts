/**
 * The Singleton pattern ensures a class has only one instance and provides a global point of access to it.
 */

export class Singleton {
  private static instance: Singleton;

  // private constructor so that no instance is created
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      // If not created create an instance of the class
      // store the instance in the variable
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

// Usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true
