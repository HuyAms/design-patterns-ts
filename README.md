# How to run

```
npx ts-node src/<pattern-name>
```

Example

```
npx ts-node src/singleton
```

Here are the implementations of the following design patterns in TypeScript:

# Creational Patterns

## Singleton

A singleton is an object that can only be instantiated once. It is useful fo implementing a global object that can be accessed from anywhere in the application.

## Builder

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

## Factory Method

Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

### Why it's useful

- Encapsulates object creation logic
- Makes code easier to extend with new product types

### Without pattern

```ts
function exportReport(type: string, content: string) {
  let report: ReportDocument | null = null;

  if (type === 'pdf') {
    report = new PDFDocument(content); // direct creation
  } else if (type === 'word') {
    report = new WordDocument(content);
  } else if (type === 'excel') {
    report = new ExelDocument(content);
  }

  if (!report) {
    throw new Error('Invalid report type');
  }

  report.generateReport();
}
```

### With pattern

Object creation is encapsulated inside the factory. This means if the same object is created in multiple places, we can centralize that logic in the factory. If the creation changes later, we only need to update it in one place — the factory — instead of updating every usage.

```ts
const pdfReportFactory = new PDFReportFactory();
pdfReportFactory.createReport('Hello World');

const wordReportFactory = new WordReportFactory();
wordReportFactory.createReport('Hello World');

// adding new type of report is easy
const excelReportFactory = new ExcelReportFactory();
excelReportFactory.createReport('Hello World');
```

## Prototype

Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

### Without pattern

```ts
const cat = new Cat('Scott', 4.5);
const clonedCat: Cat = new Cat(cat.furColor, cat.weight);
console.log(clonedCat); // Output: Cat { furColor: 'Scott', weight: 4.5 }
```

### With pattern

```ts
const cat = new Cat('Scott', 4.5);
const clonedCat: Cat = cat.clone();
console.log(clonedCat); // Output: Cat { furColor: 'Scott', weight: 4.5 }
```
