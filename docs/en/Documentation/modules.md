# __:fontawesome-solid-industry: Modules__

This documentation covers the syntax and usage of modules in Eiger. Modules allow for organizing code, reusing functionality, and maintaining a clean project structure. This guide will explain how to include both built-in and user-defined modules in your projects.

## Introduction to Modules

Modules in Eiger provide a way to encapsulate code into separate files that can be included and reused across different parts of a project. There are two types of modules:

- __Built-in__: Provided by the language and included without quotes
- __User-defined__: Created by the user and included with quotes

## Including Modules
To include a module in your file, use the `include` statement followed by the module name.

### Built-in Modules
Built-in modules are included without quotes. These modules provide commonly used functionalities.
```eiger
include math ~ This includes the built-in math module
```

### User-defined Modules
User-defined modules are included with quotes. These modules are created by the user and can be organized in a project directory.
```eiger
include "mymodule.ei" ~ This includes the user-defined module mymodule.ei
```

## Using Included Modules
After including a module, you can access its functionality and defined classes or variables. For instance, if a module defines a class or a variable, you can use them directly in your code.

```eiger
include "mymodule.ei" ~ This module has an implementation for dataclass Test

emitln(Test.message) ~ Accessing a property from a dataclass from an included module
```

## Example Project Structure
Here is an example of a project structure that uses modules:
```none
project/
│
├── main.ei
└── mymodule.ei
```

### `main.ei`
```eiger
~ this is a comment
include math ~ don't use quotes for built-in modules 
include "mymodule.ei" ~ use quotes for user-defined modules

emitln(Test.message) ~ Using a class from the user-defined module
```

### `mymodule.ei`
```eiger
emitln("my module loaded!") ~ This will be executed when the module is included
                            ~ i.e the start of the program

dataclass Test
    message = "Hello World!"
end
```