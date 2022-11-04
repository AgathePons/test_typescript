# POO with Typescript

## class vs object

An object is a class instance.
A class is a model for objects, it is an abstraction of the real world. Classes can have **properties**:

- **attributes**
- **constructor**
- **methods**

A class can inherit properties of an other class.
A class can have mandatory properties when it implements an **interface**.

## SOLID principles

- **S**ingle responsibility: a class has one and onely one responsibility
- **O**pen/close: opened to extension, closed to modification
- **L**iskov substitution: if a class can create only one object which cannot be substituted by an other instance of this class, then this has not to be a class (ex: the dog Medor cannot be substituated, it is the last level of specificity)
- **I**nterface segregation: prefer the interface rathen than the class
- **D**ependency injection: prefer the collaboration between classes rathen than define specific behaviors in one classes

## Properties

The properties (attributes) define the common caracteritics of instanciated objects of a class. It can be a string, a number, an array, an instance of an other class, an array of instances of an other class...

## Methods

Methods define the behavior of an object.  
For example, a class `Dog` can have a method `bark()`.

Methods can return something, or not.  
With TypeScript, we use the keyword `void` when a method does not return anything.

Methods can take parameters.

## The keyword `this`

`this` represents the instance (the object itself) inside the class.

## Encapsulation: `public`, `private`, `protected`

- `public`: the attribute / method is reachable from the outside of the class
- `private`: the attribute / method is **not** reachable from the outside of the class
- `protected`: the attribute / method is not reachable from the outside of the class **except** for the classes that extend this class.

## Getter / setter

Getter and setter are twi kinds of method.

- **Getter**: `getSomething()` allows to get the value of a class intance property, it returns the value. It has to be `public` to be reachable from the outside of the class.
- **Setter**: `setSomething(valueToSet)` allows to set a vlue to a class instance property. It takes **one** (and only one) parameter (the value to set) and does not return anything.

Usually, we have both getter and setter, but it is not mandatory, we can have just the getter, or just the setter regarding the logic we have to implemant.

## Constructor