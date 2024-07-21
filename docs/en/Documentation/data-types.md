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
a = [1,2,3]
b = ["Hello World!",2.0,4.2]

~ Arrays can be nested
d = [[1,2],[[3,4],5]]

~ Arrays can be empty
e = []
```

## Examples of Usage

### Working with `int`
```eiger
~ Declaring an integer
age = 25

~ Performing arithmetic operations
sum = age + 5
difference = age - 3
product = age * 2
quotient = age / 5
```

### Working with `double`
```eiger
~ Declaring a double
height = 1.75

~ Performing arithmetic operations
sum = height + 0.25
difference = height - 0.5
product = height * 2.0
quotient = height / 2.0
```

### Working with `bool`
```eiger
~ Declaring a boolean
is_student = true

~ Using boolean in conditions
if is_student then
    emitln("You are a student")
else
    emitln("You are not a student")
end
```

### Working with `string`
```eiger
~ Declaring a string
name = "Alice"

~ String concatenation
greeting = "Hello, " + name + "!"

~ String interpolation
message = "Your name is " + name + " and you are " + age + " years old."
```

### Working with `nix`
```eiger
~ Declaring a nix
value = nix

~ Checking for nix
if value ?= nix then
    emitln("The value is undefined")
else
    emitln("The value is defined")
end

~ Using nix in arrays
data = [1, nix, "example", nix]

for i = 0 to data.length do
    if data[i] ?= nix then
        emitln("Found an undefined value")
    else
        emitln("Value: " + data[i])
    end
end
```

### Combining different data types
```eiger
~ Mixed type array
mixed_array = [1, 2.5, "example", true, nix]

for i = 0 to mixed_array.length do
    emitln("Value: " + mixed_array[i])
end
```