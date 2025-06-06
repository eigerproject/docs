# __:fontawesome-solid-object-group: Օբյեկտ-կողմնորոշված ծրագրավորում__

Այս ուղեցույցը ներկայացնում է Eiger-ում օգտագործվող ՕԿԾ (OOP) մոդելը, ներառյալ __Դասերը__ և __Դատակլասերը__:

## Դասեր (Classes)

__Դասը__ սահմանում է օբյեկտների կարուցվածքը: Այն կարող է պարունակել հատկություններ և մեթոդներ։

#### Սինտաքս
```eiger
class ClassName {
    let [modifiers] propertyName

    ~ `new` մեթոդը գործում է որպես կոնստրուկտոր:
    func new(parameters) {
        ~ `this` հղում է հենց իրեն:
        this.propertyName = parameter
    }
}
```

#### Օրինակ
```eiger
class Person {
    let private m_name
    let private m_age
    let private m_birthYear

    ~ Կոնստրուկտոր
    func new(name, age, birthYear) {
        this.m_name = name
        this.m_age = age
        this.m_birthYear = birthYear
    }

    ~ Մեթոդ
    func summary() {
        ret (m_name + " (" + m_age.asString + " years old, born " + m_birthYear.asString + ")")
    }
}

~ Օբյեկտի ստեղծում դասից
let personOne = Person("John", 25, 2000)

~ `summary` մեթոդի կանչում ՝personOne-ում։
emitln(personOne.summary())
```

### Առանձնահատկություններ
- __Հատկությունները__ հայտարարվում են `let`-ով, ինչպես փոփոխականները:
- Թույլտվությունների Փոփոխիչներ (Access Modifiers):
    - `public` (լռելյայն): Հասանելի է ցանկացած վայրից:
    - `private`: Հասանելի է միայն դասում:
- Կոնստրուկտոր:
    - Հայտարարված է `func new(params)`-ով:
    - Օգտագործվում է օբյեկտը սկզբնավորելու համար: