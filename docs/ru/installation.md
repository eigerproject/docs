# __:fontawesome-solid-circle-down: Установка__

На этой странице будут показаны шаги по установке Eiger для каждой операционной системы.

---

## :fontawesome-brands-windows: Windows
Перейдите на [страницу выпусков](https://github.com/eigerproject/eigerlang/releases) репозитории и загрузите `eiger-win.zip` последней версии.
> __Если стабильных версий языка еще нет, обратитесь к разделу [«сборка из исходного кода»](#_2).__
### Добавление переменной среды (Windows)
```batch
setx PATH "%PATH%;C:\путь\к\eiger-win"
```

---

## :fontawesome-brands-apple: macOS
> __обратитесь к разделу [«сборка из исходного кода»](#_2).__

---

## :fontawesome-brands-linux: Linux
> __обратитесь к разделу [«сборка из исходного кода»](#_2).__

---

## :fontawesome-solid-code: Сборка из исходного кода
### Требования
 - Visual Studio (или любая IDE, которая может открывать файлы `.sln`) с компилятором C#
### Шаги
 - Клонировайте репозиторию `https://github.com/eigerproject/eigerlang.git`
 - Откройте решение `eiger.sln` с помощью Visual Studio.
 - Стройте и запускайте