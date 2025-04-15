// parts
class Engine {}
class Transmission {}
class BodyStyle {}
class Interior {}
class Wheels {}

interface CarBuilder {
  setEngine(engine: Engine): CarBuilder;
  setTransmission(transmission: Transmission): CarBuilder;
  setBodyStyle(bodyStyle: BodyStyle): CarBuilder;
  setInterior(interior: Interior): CarBuilder;
  setWheels(wheels: Wheels): CarBuilder;
  build(): Car;
}

interface Car {
  engine?: Engine;
  transmission?: Transmission;
  bodyStyle?: BodyStyle;
  interior?: Interior;
  wheels?: Wheels;
}

class CarBuilder implements CarBuilder {
  private car: Car;

  constructor() {
    this.car = {};
  }

  setEngine(engine: Engine) {
    this.car.engine = engine;
    return this;
  }

  setTransmission(transmission: Transmission) {
    this.car.transmission = transmission;
    return this;
  }

  setBodyStyle(bodyStyle: BodyStyle) {
    this.car.bodyStyle = bodyStyle;
    return this;
  }

  setInterior(interior: Interior) {
    this.car.interior = interior;
    return this;
  }

  setWheels(wheels: Wheels) {
    this.car.wheels = wheels;
    return this;
  }

  build(): Car {
    return this.car;
  }
}

// Generic builder interface
interface Builder<T> {
  build(): T;
}

// Generic builder implementation
class GenericBuilder<T> implements Builder<T> {
  private obj: Partial<T> = {};

  public set<K extends keyof T>(key: K, value: T[K]): GenericBuilder<T> {
    this.obj[key] = value;
    return this;
  }

  public build(): T {
    return this.obj as T;
  }
}

// Usage
const engine = new Engine();
const transmission = new Transmission();
const bodyStyle = new BodyStyle();
const interior = new Interior();
const wheels = new Wheels();

const carBuilder = new CarBuilder();

const car = carBuilder
  .setEngine(engine)
  .setTransmission(transmission)
  .setBodyStyle(bodyStyle)
  .setInterior(interior)
  .setWheels(wheels)
  .build();

console.log('Car: ', car);
