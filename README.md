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

Usually, we have both getter and setter, but it is not mandatory, we can have just the getter, or just the setter regarding the logic we have to implemant. It has to be `public` too.

## Constructor

The constructor is an optional method which can be defined in a class. If a class has a constructor, the method is automatically called when an instance of the calss is created.  
A constructor never defines a return value.  
A constructor can takes parameters.

Usually, it is used only when it is necessary, and to initiate an object but it is a bad practice to have a constructor with too many parameters. The risk of inverted arguments is too high.  
So we can define a constructor with only a few parameters.

## Constructor and inheritance

If a class A extends a class B with a constructor, the class A has to have a constructor, at least the constructor of class B with the keyword `super`.

Class B:

```js
public construct(firstName, lastName) {
  this.fistName = firstName;
  this.lastName = lastName;
}
```

Class A:

```js
public construct(firstName, lastName) {
  super(firstName, lastNAme);
}
```

It is possible to add other paramerters or logic in the constructor of the class A:

```js
public construct(firstName, lastName, favoriteColor) {
  super(firstName, lastNAme);
  this.favoriteColor = favoriteColor;
}
```

In other languages (Java for example), it is possible to define many constructors. The constructor to use is automatically called regarding the signature of the arguments given.

## Generalization / specialization

The possibility to extend a class allows to define a "general" class, and "special" classes that extend the "general" classe to inherit the attributes/methods of the "general" class, and define more specific attributes/methods in the "special" classes.

## Abstract class

An abstract class is a kind of class that cannot be instanciated. The methods of an abstract class are available without creating an instance of the class.  
For example, `Math` is an abstract class that gives access to many methods like `random()`, `floor()`, `round()`...

Those methods can be called:

```js
const number = Math.random();
```

We can also use abstract classes to define "general" classes that are extended by "specific" classes that can be instanciated.

To define an abstract class, we use the keyword `abstract`.

## Abstract method

An abstract method has to be in an abstract class. It is defined like in an interface. It means if a class A and a class B extend a class C which has an abstract method `doSomething()`, that means that classes A and B have to implement a method `doSomething()`.

Unlike interfaces, abstract methods from abstract classes are distributed vertically (interfaces are distributed horizontally).
