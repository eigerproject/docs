# __:fontawesome-solid-code-branch: Control Flow__

## Conditional statements
Conditional statements are used to execute code based on a condition.  
In Eiger, the `if` statement is used to execute code if a condition is `true`. The `else` statement is used to execute code if the condition is `false`. `else` statements are optional and go after `if` statements.

### `if` statement
```eiger
if true then
    emitln("condition is true")
end
```

### `if-else` statement
```eiger
if 1 + 1 ?= 2 then
    emitln("1 + 1 = 2")
else
    ~ Unreachable code
end
```

## Loops

There are 2 types of loops. `for` and `while`.

### `for` loops
In Eiger, for loops have 2 parts: **Variable declaration** and **end value**  
Let's say we need to have a value `x` and it will increment by 1 until the end value, we also need to execute a block of code on each iteration  
__These types of loops are called [Count-controlled loops](https://en.wikipedia.org/wiki/Control_flow#Condition-controlled_loops)__
```eiger
for x = 0 to 10 do
    emitln(x)
end
```

### `while` loops
While loops will repeat the code until the given condition is not true anymore. __Those are called [Condition-controlled loops](https://en.wikipedia.org/wiki/Control_flow#Condition-controlled_loops)__
```eiger
x = 0
while x < 10 do
    emitln(x)
    x += 1
end
```