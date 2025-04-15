# Design Patterns in TS

## How to run

```
npx ts-node src/<pattern-name>
```

Example

```
npx ts-node src/singleton
```

Here are the implementations of the following design patterns in TypeScript:

## Creational Patterns

### Singleton

A singleton is an object that can only be instantiated once. It is useful fo implementing a global object that can be accessed from anywhere in the application.

### Builder

The builder pattern is a creational design pattern that lets you construct complex objects step by step.

### Without builder

a constructor with lots of parameters, which is harder to read and maintain

```ts
const car = new Car({
  engine: engine,
  transmission: transmission,
  bodyStyle: bodyStyle,
  interior: interior,
  wheels: wheels,
});
```

### With builder

```ts
const car = carBuilder
  .setEngine(engine)
  .setTransmission(transmission)
  .setBodyStyle(bodyStyle)
  .setInterior(interior)
  .setWheels(wheels)
  .build();
```
