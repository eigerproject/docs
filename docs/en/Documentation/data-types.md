# __:fontawesome-solid-database: Data Types__

## Basic Types
The Basic types are:  

- `int`: Integer Number
- `double`: Double Number (with floating point, e.g `1.2`)
- `bool`: Boolean value
- `string`: String value

## Special Types
- `nix`: Represents undefined value
- `function`: Represents a function (see [`functions`](../functions))

## Arrays
Arrays are declared using square brackets (`[]`). An array can contain any data type.

```eiger
~ Arrays
let a = [1,2,3]
let b = ["Hello World!",2.0,4.2]

~ Arrays can be nested
let d = [[1,2],[[3,4],5]]

~ Arrays can be empty
let e = []
```

## Examples of Usage

### Working with `int`
```eiger
~ Declaring an integer
let age = 25

~ Performing arithmetic operations
let sum = age + 5
let difference = age - 3
let product = age * 2
let quotient = age / 5
```

### Working with `double`
```eiger
~ Declaring a double
let height = 1.75

~ Performing arithmetic operations
let sum = height + 0.25
let difference = height - 0.5
let product = height * 2.0
let quotient = height / 2.0
```

### Working with `bool`
```eiger
~ Declaring a boolean
let is_student = true

~ Using boolean in conditions
if is_student 
    emitln("You are a student")
else 
    emitln("You are not a student")
```

### Working with `string`
```eiger
~ Declaring a string
let name = "Alice"

~ String concatenation
let greeting = "Hello, " + name + "!"

~ String interpolation
let message = "Your name is " + name + " and you are " + age + " years old."
```

### Working with `nix`
```eiger
~ Declaring a nix
let value
~ [OR] let value = nix

~ Checking for nix
if value ?= nix then
    emitln("The value is undefined")
else
    emitln("The value is defined")
end

~ Using nix in arrays
data = [1, nix, "example", nix]

for i = 0 to data.length {
    if data[i] ?= nix
        emitln("Found an undefined value")
    else
        emitln("Value: " + data[i])
}
```

### Combining different data types
```eiger
~ Mixed type array
let mixed_array = [1, 2.5, "example", true, nix]

for i = 0 to mixed_array.length
    emitln("Value: " + mixed_array[i])
```