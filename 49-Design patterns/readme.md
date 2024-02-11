# Design patterns 

Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular design problem in your code.

In this lesson, we will learn about some of the most common design patterns in JavaScript.

## Why use design patterns?

Design patterns are a great way to improve the quality of your code. They help you write code that is more maintainable, scalable, and reusable. They also help you avoid common mistakes and bugs.

Here are some of the benefits of using design patterns:

- **Reusability**: Design patterns help you write code that is more reusable. This means that you can use the same code in different parts of your application without having to rewrite it.
- **Scalability**: Design patterns help you write code that is more scalable. This means that you can easily add new features to your application without having to rewrite large parts of it.
- **Maintainability**: Design patterns help you write code that is more maintainable. This means that you can easily fix bugs and make changes to your code without breaking other parts of your application.
- **Readability**: Design patterns help you write code that is more readable. This means that other developers can easily understand your code and work with it.
- **Performance**: Design patterns help you write code that is more performant. This means that your application will run faster and use less memory.
- **Consistency**: Design patterns help you write code that is more consistent. This means that your application will have a more uniform look and feel.
- **Best practices**: Design patterns help you follow best practices in software design. This means that your code will be more reliable and secure.
- **Common language**: Design patterns help you speak a common language with other developers. This means that you can easily communicate and collaborate with other developers.
- **Problem solving**: Design patterns help you solve common problems in software design. This means that you can avoid common mistakes and bugs.

## Common design patterns

### 1. Creational Patterns

#### a. Singleton Pattern

The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. This is useful when you want to control access to a shared resource or maintain a single point of control.

**Example:**

```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  // Other methods and properties
}
```

#### b. Factory Pattern

The Factory pattern is used for creating objects without specifying the exact class of the object that will be created. It provides an interface for creating instances of a class, with its subclasses deciding which class to instantiate.

**Example:**

```javascript
class CarFactory {
  createCar(type) {
    if (type === 'Sedan') {
      return new Sedan();
    } else if (type === 'SUV') {
      return new SUV();
    } else {
      throw new Error('Invalid car type');
    }
  }
}
```

### 2. Structural Patterns

#### a. Module Pattern

The Module pattern allows encapsulation and organization of code by creating a self-contained unit. It uses closures to provide private and public methods and variables.

**Example:**

```javascript
const module = (function() {
  // Private variables and methods
  let privateVar = 'I am private';

  function privateMethod() {
    console.log(privateVar);
  }

  // Public interface
  return {
    publicMethod: function() {
      privateMethod();
    }
  };
})();
```

#### b. Decorator Pattern

The Decorator pattern allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class.

**Example:**

```javascript
class Car {
  drive() {
    console.log('Driving');
  }
}

class ElectricCarDecorator {
  constructor(car) {
    this.car = car;
  }

  drive() {
    this.car.drive();
    console.log('...in electric mode');
  }
}
```

### 3. Behavioral Patterns

#### a. Observer Pattern

The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

**Example:**

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update());
  }
}

class Observer {
  update() {
    console.log('State updated');
  }
}
```

#### b. Strategy Pattern

The Strategy pattern defines a family of algorithms, encapsulates each algorithm, and makes them interchangeable. It lets the client choose the appropriate algorithm at runtime.

**Example:**

```javascript
class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executePayment(amount) {
    return this.strategy.pay(amount);
  }
}

class CreditCardPayment {
  pay(amount) {
    console.log(`Paid ${amount} via credit card`);
  }
}

class PayPalPayment {
  pay(amount) {
    console.log(`Paid ${amount} via PayPal`);
  }
}
```

## Conclusion

Design patterns play a crucial role in writing maintainable, scalable, and efficient JavaScript code. By understanding and applying these patterns, developers can create more robust and flexible applications. Always remember that design patterns are tools, not solutions, and should be chosen wisely based on the specific requirements of your project.