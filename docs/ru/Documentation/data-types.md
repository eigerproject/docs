# __:fontawesome-solid-database: Типы Данных__

## Основные Типы
Основные типы данных:

- `int`: Целое число
- `double`: Дробное число (с плавающей запятой, напр. `1.2`)
- `bool`: Логическое значение
- `string`: Строковое значение

## Специальные Типы
- `nix`: Представляет неопределенное значение
- `function`: Представляет функцию (см. [`функции`](../functions))

## Массивы
Массивы объявляются с использованием квадратных скобок (`[]`). Массив может содержать любые типы данных.

```eiger
~ Массивы
let a = [1,2,3]
let b = ["Привет, мир!", 2.0, 4.2]

~ Массивы могут быть вложенными
let d = [[1,2],[[3,4],5]]

~ Массивы могут быть пустыми
let e = []
```

## Примеры использования

### Работа с `int`
```eiger
~ Объявление целого числа
let age = 25

~ Выполнение арифметических операций
let sum = age + 5
let difference = age - 3
let product = age * 2
let quotient = age / 5
```

### Работа с `double`
```eiger
~ Объявление дробного числа
let height = 1.75

~ Выполнение арифметических операций
let sum = height + 0.25
let difference = height - 0.5
let product = height * 2.0
let quotient = height / 2.0
```

### Работа с `bool`
```eiger
~ Объявление логического значения
let is_student = true

~ Использование логического значения в условиях
if is_student then
    emitln("Вы студент")
else
    emitln("Вы не студент")
end
```

### Работа с `string`
```eiger
~ Объявление строки
let name = "Alice"

~ Конкатенация строк
let greeting = "Привет, " + name + "!"

~ Интерполяция строк
let message = "Ваше имя " + name + " и вам " + age + " лет."
```

### Работа с `nix`
```eiger
~ Объявление nix
let value
~ [ИЛИ] let value = nix

~ Проверка на nix
if value ?= nix then
    emitln("Значение неопределено")
else
    emitln("Значение определено")
end

~ Использование nix в массивах
let data = [1, nix, "пример", nix]

for i = 0 to data.length do
    if data[i] ?= nix then
        emitln("Найдено неопределенное значение")
    else
        emitln("Значение: " + data[i])
    end
end
```

### Сочетание различных типов данных
```eiger
~ Массив со смешанными типами
let mixed_array = [1, 2.5, "пример", true, nix]

for i = 0 to mixed_array.length do
    emitln("Значение: " + mixed_array[i])
end
```