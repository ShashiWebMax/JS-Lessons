# Solving Common JS Interview Questions

#### Consider the following JavaScript code

```js
class Vehicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}

class Car extends Vehicle {
  constructor(name) {
    super(name, 'car');
  }

  getName() {
    return 'It is a car: ' + super.getName();
  }
}

let myCar = new Car('Tesla');


```

#### What is the output of the following code?

1. What does the extends keyword do in this context?
   *answer:* it is used to create a class that is a child of another class

2. What is the purpose of the super keyword and how is it used here?
   *answer:* it is used to call the constructor of the parent class

3. What will myCar.getName() return and why?
    *answer:* It is a car: Tesla

4. How would you add a method to the Car class that overrides the getType method from the Vehicle class?
    *answer:* 
  ```js
  getType() {
    return 'car';
  }  
  ```

5. Can you explain how method overriding works in JavaScript classes?
  *answer:* 
  - When a method is called on an object, JavaScript looks for the method in the object's prototype. 
  - If the method is not found in the object's prototype, JavaScript looks for the method in the prototype of the object's constructor. 
  - If the method is not found in the prototype of the object's constructor, JavaScript looks for the method in the prototype of the object's constructor's constructor, and so on. 
  - If the method is not found in any of the prototypes, JavaScript throws an error.


*(15 mins)*