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
