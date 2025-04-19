# __:fontawesome-solid-circle-down: Ծրագրի տեղադրում__

Այս էջը ցույց կտա Eiger-ի տեղադրման քայլերը յուրաքանչյուր օպերացիոն համակարգի համար

---

## :fontawesome-brands-windows: Windows
Գնացեք GitHub էջի [թողարկումների էջ (Releases)](https://github.com/eigerproject/eigerlang/releases) և ներբեռնեք վերջին թողարկման `eiger-win.zip`:
> __Եթե դեռ լեզվի կայուն թողարկումներ չկան, [Կառուցեք ծրագիրը կոդից](#building-from-source):__
### Շրջակա միջավայրի փոփոխականի (Environment Variable) ավելացում (Windows)
```batch
setx PATH "%PATH%;C:\path\to\eiger-win"
```
---

## :fontawesome-brands-apple: macOS
> __[Կառուցեք ծրագիրը կոդից](#building-from-source):__

---

## :fontawesome-brands-linux: Linux
> __[Կառուցեք ծրագիրը կոդից](#building-from-source):__

---

## :fontawesome-solid-code: Ծրագրի կառուցում կոդից

### Օգտագործելով Visual Studio

#### Պետք է՝
- Visual Studio՝ C# Development Workload֊ով

#### Քայլեր
1. Կլոնավորեք ռեպոզիտորիան
   `git clone https://github.com/eigerproject/eigerlang.git`
2. Բացեք `eiger.sln` ֆայլը Visual Studio-ում:
3. Կառուցեք և բացեք ծրագիրը:

---

### Օգտագործելով .NET CLI

#### Պետք է՝
- .NET SDK (ներառում է .NET CLI)

#### Քայլեր
1. Կլոնավորեք ռեպոզիտորիան
   `git clone https://github.com/eigerproject/eigerlang.git`
2. Բացեք `/eiger` դիրեկտորիան:
3. Գործարկեք ծրագիրը `dotnet run`

---

## :fontawesome-solid-vial-circle-check: Թեստեր

### Օգտագործելով Visual Studio

#### Պետք է՝
- Visual Studio՝ C# Development Workload֊ով

#### Քայլեր
1. Բացեք `eiger.sln` ֆայլը Visual Studio-ում:
2. Օգտագործեք **Test Explorer**-ը բոլոր թեստերը գործարկելու համար:

---

### Օգտագործելով .NET CLI

#### Պետք է՝
- .NET SDK (includes the .NET CLI)

#### Քայլեր
1. Կլոնավորեք ռեպոզիտորիան
   `git clone https://github.com/eigerproject/eigerlang.git`
2. Բացեք `/eiger․Տեստս` դիրեկտորիան:
3. Գործարկեք թեստերը `dotnet test`
