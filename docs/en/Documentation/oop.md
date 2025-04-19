# __:fontawesome-solid-object-group: Object-Oriented Programming__

This guide introduces the OOP model used in Eiger, including __Classes__ and __Dataclasses__.

## Classes

A __class__ defines a blueprint for objects. It can contain properties and functions (methods), and it supports constructors for initializing instances.

#### Syntax
```eiger
class ClassName
    let [modifiers] propertyName

    ~ The `new` function acts as a constructor.
    func new(parameters)
        ~ `this` is a reference to the current class instance.
        this.propertyName = parameter
    end
end
```

#### Example
```eiger
class Person
    let private m_name
    let private m_age
    let private m_birthYear

    ~ Constructor
    func new(name, age, birthYear)
        this.m_name = name
        this.m_age = age
        this.m_birthYear = birthYear
    end

    ~ Method
    func summary()
        ret (m_name + " (" + m_age.asString + " years old, born " + m_birthYear.asString + ")")
    end
end

~ Creating a class instance from a "blueprint" (class)
let personOne = Person("John", 25, 2000)

~ Calling the summary method in personOne
emitln(personOne.summary())
```

### Features
- __Properties__ are declared with `let`, just like variables
- Access Modifiers:
    - `public` (default): Accessible from anywhere
    - `private`: Accessible only within the class
- Constructor:
    - Declared with `func new(params)`
    - Used to initialize the object

## Dataclasses

A dataclass defines a group of static properties. __It behaves like a class but does not have a constructor.__

#### Syntax
```eiger
dataclass ClassName
    let [modifiers] propertyName = value
    
    func method(params)
        ~ ...
    end
end
```

#### Example
```eiger
dataclass math
    ~ Mathematical Constants
    let readonly pi = 3.14159265358979323846
    let readonly e = 2.718281828459045

    ~ get the unsigned value of a number
    func abs(n)
        if n < 0 then
            ret -n
        else
            ret n
        end
    end

    func sin(theta)
        ~ ...
    end
end

emitln(math.abs(-128))
emitln(math.sin(math.pi))
```

### Features
- __Static__ by nature: You do not instantiate a dataclass.
- Access Modifiers:
    - `public` (default): Accessible from anywhere
    - `private`: Accessible only within the dataclass
- `new` function is not used.