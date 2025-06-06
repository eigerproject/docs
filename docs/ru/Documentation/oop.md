# __:fontawesome-solid-object-group: Объектно-ориентированное программирование__

В этом руководстве представлена ​​модель ООП, используемая в Eiger, включая __Классы__ и __Датаклассы__.

## Классы

__Класс__ определяет схему объектов. Он может содержать свойства и функции (методы), а также поддерживает конструкторы для инициализации объектов.

#### Синтаксис
```eiger
class ClassName {
    let [modifiers] propertyName

    ~ Функция `new` действует как конструктор.
    func new(parameters) {
        ~ `this` - ссылка на текущий объект.
        this.propertyName = parameter
    }
}
```

#### Пример
```eiger
class Person {
    let private m_name
    let private m_age
    let private m_birthYear

    ~ Конструктор
    func new(name, age, birthYear) {
        this.m_name = name
        this.m_age = age
        this.m_birthYear = birthYear
    }

    ~ Метод
    func summary() {
        ret (m_name + " (" + m_age.asString + " years old, born " + m_birthYear.asString + ")")
    }
}

~ Создание объекта класса из "чертежа" (класса)
let personOne = Person("John", 25, 2000)

~ Вызов метода summary в personOne
emitln(personOne.summary())
```

### Функции
- __Свойства__ объявляются с помощью `let`, как и переменные
- Модификаторы доступа:
    - `public` (по умолчанию): Доступно из любой точки в программе
    - `private`: Доступно только внутри класса
- Конструктор:
    - Объявлено с помощью `func new(params)`
    - Используется для инициализации объекта.