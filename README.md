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