# __:fontawesome-solid-door-open: Добро пожаловать!__

<img alt="Eigerlang logo" src="https://raw.githubusercontent.com/eigerproject/eigercs/refs/heads/master/artwork/eiger-green-512.png" id = "main-logo-ei">

Eiger (название от [горы Эйгер, Швейцария](https://ru.wikipedia.org/wiki/%D0%90%D0%B9%D0%B3%D0%B5%D1%80)) — простой интерпретируемый язык программирования с динамической типизацией.

---

__:fontawesome-solid-globe: Веб-сайт__: [https://eigerproject.github.io](https://eigerproject.github.io)

__:fontawesome-solid-book: Документация__: [https://eigerproject.github.io/docs](https://eigerproject.github.io/docs)

__:fontawesome-brands-git-alt: Репозитория__: [https://github.com/eigerproject/eigercs](https://github.com/eigerproject/eigercs)

---

## __:fontawesome-solid-lightbulb: Введение__
Eiger — язык программирования, предназначенный для упрощения программирования. Названный в честь знаменитой швейцарской горы, Эйгер выделяется своим уникальным сочетанием простоты и мощи.

--- 

### __:fontawesome-solid-bolt: Функции__

- __:fontawesome-solid-quote-right: Динамическая типизация__: Eiger позволяет писать код, не беспокоясь о типах данных. Переменные являются динамически типизированными, что позволяет сосредоточиться на логике, а не на объявлениях типов.
- __:fontawesome-solid-language: Интерпретированное исполнение__: Eiger - интерпретируемый язык, что означает, что код выполняется интерпретатором.
- __:fontawesome-solid-code: Чистый синтаксис__: Синтаксис Eiger прост и удобочитаем. Вдохновленный простотой таких языков, как Python,стремится сократить количество шаблонного кода.
- __:fontawesome-solid-book: Стандартные библиотеки__: У Eiger есть стандартные библиотеки, которые можно включить в ваш код одной строкой. Стандартные библиотеки имеют часто используемый код и могут помочь в разработке.

### __:fontawesome-solid-code: Синтаксис__
```eiger
~ Это комментарий
let message = "Привет, мир!"
emitln(message)

func ask(a,b) {
    emitln("Сколько будет " + a.asString + " + " + b.asString + "?")
    let sum = int(in())
    ret sum ?= (a + b)
}

if ask(9,10)
    emitln("Верно!")
else
    emitln("Неправильно")
```
Это простая демонстрация синтаксиса языка программирования Eiger. Посетите другие страницы здесь для получения дополнительной документации.