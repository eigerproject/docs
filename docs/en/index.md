# __:fontawesome-solid-door-open: Welcome!__
![Wordmark](../wordmark.png)
Eiger (name from [Mt. Eiger, Switzerland](https://en.wikipedia.org/wiki/Eiger)) is a simple, interpreted,dynamic-typed programming language.

---

__:fontawesome-solid-globe: Website__: [https://eigerproject.github.io](https://eigerproject.github.io)

__:fontawesome-solid-book: Documentation__: [https://eigerproject.github.io/docs](https://eigerproject.github.io/docs)

__:fontawesome-brands-git-alt: Repository__: [https://github.com/eigerproject/eigercs](https://github.com/eigerproject/eigercs)

---

## __:fontawesome-solid-lightbulb: Intro__
Eiger is a versatile programming language designed to simplify coding. Named after the iconic Swiss mountain, Eiger stands tall with its unique blend of simplicity and power.

--- 

### __:fontawesome-solid-bolt: Current Features__

- __:fontawesome-solid-quote-right: Dynamic Typing__: Eiger allows you to write code without worrying about data types. Variables are dynamically typed, enabling you to focus on logic rather than type declarations
- __:fontawesome-solid-language: Interpreted Execution__: Eiger is an interpreted language, which means the code is executed line-by-line by the interpreted.
- __:fontawesome-solid-code: Clean Syntax__: The syntax of Eiger is designed to be easy and readable. Inspired by the simplicity of languages like Python, it aims to reduce boilerplate code
- __:fontawesome-solid-book: Standard Libraries__: Eiger has standard libraries that can be included in your code with one line of code. Standard libraries have commonly used code and can help development

### __:fontawesome-solid-code: Syntax__
```eiger
~ This is a comment
let message = "Hello, World!"
emitln(message)

func ask(a,b)
    emitln("What is " + a.asString + " + " + b.asString + "?")
    let sum = int(in())
    ret sum ?= (a + b)
end

if ask(9,10) then
    emitln("Correct!")
else
    emitln("Wrong")
end
```
This is a simple demonstration of the syntax of the Eiger programming language. Check out other pages here for further documentation.