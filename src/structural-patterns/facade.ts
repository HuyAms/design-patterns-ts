interface SystemA {
  operationA1(): void;
  operationA2(): void;
}

interface SystemB {
  operationB1(): void;
  operationB2(): void;
}

class SystemA implements SystemA {
  operationA1() {
    console.log('operationA1');
  }
  operationA2() {
    console.log('operationA2');
  }
}

class SystemB implements SystemB {
  operationB1() {
    console.log('operationB1');
  }
  operationB2() {
    console.log('operationB2');
  }
}
class Facade {
  constructor(private systemA: SystemA, private systemB: SystemB) {}

  // this is just a wraper to ensure that we call the correct methods in the correct orders
  simplifiedOperation1() {
    this.systemA.operationA1();
    this.systemA.operationA2();
    this.systemB.operationB2();
    this.systemB.operationB1();
  }
}

// Usage
const systemA = new SystemA();
const systemB = new SystemB();
const facade = new Facade(systemA, systemB);
facade.simplifiedOperation1();
