# __:fontawesome-solid-door-open: Բարի գալուստ__

<img alt="Eigerlang logo" src="https://raw.githubusercontent.com/eigerproject/eigercs/refs/heads/master/artwork/eiger-green-512.png" id = "main-logo-ei">

Eiger (անունը [Շվեյցարիայի Էյգեր լեռից](https://en.wikipedia.org/wiki/Eiger)) պարզ, դինամիկ տպագրված ծրագրավորման լեզու է:

---

__:fontawesome-solid-globe: Կայք__: [https://eigerproject.github.io](https://eigerproject.github.io)

__:fontawesome-solid-book: Դոկումենտացիա__: [https://eigerproject.github.io/docs](https://eigerproject.github.io/docs)

__:fontawesome-brands-git-alt: GitHub Հղում__: [https://github.com/eigerproject/eigercs](https://github.com/eigerproject/eigercs)

---

## __:fontawesome-solid-lightbulb: Ներածություն__
Eiger-ը ծրագրավորման լեզու է, որը նախատեսված է կոդավորումը պարզեցնելու համար: Շվեյցարական խորհրդանշական լեռան անունով կոչված լեզուն աչկի է ընկնում իր պարզությամբ և ուժով:

--- 

### __:fontawesome-solid-bolt: Առանձնահատկություններ__

- __:fontawesome-solid-quote-right: Դինամիկ Տեսակավորում__: Eiger-ը թույլ է տալիս կոդ գրել՝ առանց տվյալների տեսակների մասին անհանգստանալու: Փոփոխականները դինամիկ կերպով տպագրվում են, ինչը հնարավորություն է տալիս կենտրոնանալ ծրագրի լոգիկայի վրա, այլ ոչ թե տիպերի վրա
- __:fontawesome-solid-code: Պարզ Սինտաքս__: Eiger-ի սինտաքսը նախատեսված է հեշտ և ընթեռնելի լինելու համար: Ոգեշնչված է Python-ի նման լեզուների պարզությամբ։
- __:fontawesome-solid-book: Ստանդարտ Գրադարաններ__: Eiger-ն ունի ստանդարտ գրադարաններ, որոնք կարող են ներառվել ձեր կոդի մեջ մեկ տողի միջոցով: Ստանդարտ գրադարաններն ունեն շատ օգտագործվող կոդ։

### __:fontawesome-solid-code: Սինտաքս__
```eiger
~ Սա կոմմենտ է
let message = "Բարեւ, աշխարհ"
emitln(message)

func ask(a,b)
    emitln("Ինչ է " + a.asString + " + " + b.asString)
    let sum = int(in())
    ret sum ?= (a + b)
end

if ask(9,10) then
    emitln("Ճիշտ է")
else
    emitln("Սխալ է")
end
```
Սա Eiger ծրագրավորման լեզվի սինտաքսի պարզ ցուցադրումն է: