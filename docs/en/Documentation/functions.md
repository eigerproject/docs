# __:fontawesome-solid-gears: Functions__

Functions are fundamental building blocks in programming. They allow you to encapsulate code into reusable units, making your programs more modular, readable, and maintainable. This documentation covers the syntax, usage, and various features of functions in Eiger.

## Defining Functions
To define a function, use the `func` keyword followed by the function name and parentheses. To close the function body use `end`

### Syntax
```eiger
func functionName(parameters) {
    ~ function body
}
```

### Example
```eiger
func greet(name) {
    emitln("Hello, " + name + "!")
}
```

## Function Parameters
Functions can accept parameters, which are values passed into the function. Parameters are defined within the parentheses in the function declaration.

### Syntax
```eiger
func functionName(param1, param2, ...) {
    ~ function body
}
```

### Example
```eiger
func printAge(name, age) {
    emitln(name + " is " + age + " years old")
}
```

## Return Values
Functions can return a value using the `ret` statement. If no return statement is provided, the function returns `nix` (i.e `null` in C#)

### Syntax
```eiger
func functionName(parameters) {
    ret value
}
```

### Example
```eiger
func add(a, b) {
    ret a + b
}
```

## Scope and Closures
Variables declared inside a function are local to that function. Functions can also create closures, which are functions that capture and remember the environment in which they were created.

```eiger
func createCounter() {
    let count = 0

    ret func() {
        count += 1
        ret count
    }
}

counter = createCounter()

emitln(counter()) ~ 1
emitln(counter()) ~ 2
emitln(counter()) ~ 3
```

## Higher-Order Functions
Higher-order functions are functions that take other functions as arguments or return them as results. They are a key feature of functional programming.

```eiger
func applyFunction(fn, value) {
    ret fn(value)
}

func cube(x) {
    ret x ^ 3
}

emitln(applyFunction(cube, 3)) ~ 27
```