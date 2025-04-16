interface AnimalPrototype {
  clone(): AnimalPrototype;
}

class Dog implements AnimalPrototype {
  breed: string;
  age: number;

  constructor(breed: string, age: number) {
    this.breed = breed;
    this.age = age;
  }

  clone(): Dog {
    return Object.create(this);
  }
}

export class Cat implements AnimalPrototype {
  constructor(public furColor: string, public weight: number) {
    this.furColor = furColor;
    this.weight = weight;
  }

  clone(): Cat {
    return Object.create(this);
  }
}

// Usage

let dog: AnimalPrototype = new Dog('Boxer', 3);
let clonedDog: Dog = dog.clone() as Dog;
console.log(clonedDog); // Output: Dog { breed: 'Boxer', age: 3 }

let cat: AnimalPrototype = new Cat('Scott', 4.5);
let clonedCat: Cat = cat.clone() as Cat;
console.log(clonedCat); // Output: Cat { furColor: 'Scott', weight: 4.5 }
