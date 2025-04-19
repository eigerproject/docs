# __:fontawesome-solid-circle-down: Установка__

На этой странице будут показаны шаги по установке Eiger для каждой операционной системы.

---

## :fontawesome-brands-windows: Windows
Перейдите на [страницу релизов](https://github.com/eigerproject/eigerlang/releases) на Github и загрузите `eiger-win.zip` последней версии.
> __Если стабильных версий языка пока нет, обратитесь к [сборке из исходного кода](#building-from-source).__
### Добавление переменной среды (Windows)
```batch
setx PATH "%PATH%;C:\path\to\eiger-win"
```
---

## :fontawesome-brands-apple: macOS
> __обратитесь к [сборке из исходного кода](#building-from-source).__

---

## :fontawesome-brands-linux: Linux
> __обратитесь к [сборке из исходного кода](#building-from-source).__

---

## :fontawesome-solid-code: Сборка из исходного кода

### При использовании Visual Studio

#### Требования
- Visual Studio с установленной C# development workload

#### Шаги
1. Клонируйте репозиторий:  
   `git clone https://github.com/eigerproject/eigerlang.git`
2. Откройте файл решения `eiger.sln` в Visual Studio.
3. Постройте и запустите проект.

---

### При использовании .NET CLI

#### Требования
- .NET SDK (включает .NET CLI)

#### Шаги
1. Клонируйте репозиторий:  
   `git clone https://github.com/eigerproject/eigerlang.git`
2. Перейдите в папку `/eiger`.
3. Запустите проект: `dotnet run`

---

## :fontawesome-solid-vial-circle-check: Запуск модульных тестов

### При использовании Visual Studio

#### Требования
- Visual Studio с установленной C# development workload

#### Шаги
1. Откройте файл решения `eiger.sln` в Visual Studio.
2. Используйте **Test Explorer** для обнаружения и запуска всех тестов.

---

### При использовании .NET CLI

#### Требования
- .NET SDK (включает .NET CLI)

#### Шаги
1. Клонируйте репозиторий:  
   `git clone https://github.com/eigerproject/eigerlang.git`
2. Перейдите в папку `/eiger.Tests`.
3. Запустите тесты: `dotnet test`
