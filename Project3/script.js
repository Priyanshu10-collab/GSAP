function breakTheText(){
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent

    var splittedText = h1Text.split("")
    var halfValue = Math.floor(splittedText.length/2)

    var clutter = ""

    console.log(halfValue)
    splittedText.forEach(function(elem,idx){
    // clutter  +=  `<span class="a">${elem}</span>`

    if(idx < halfValue){
        clutter += `<span class="firstHalf">${elem}</span>`
    }else{
        clutter += `<span class="secondHalf">${elem}</span>`
    }
    })
    h1.innerHTML = clutter
}

breakTheText()

// gsap.from("h1 span",{
//     y:50,
//     duration:0.8,
//     opacity:0,
//     delay:0.5,
//     stagger:-0.15
// })

gsap.from("h1 .firstHalf",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:0.15,
    opacity:0,
    // ease:"elastic",
})


gsap.from("h1 .secondHalf",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0,
    // ease:"elastic",
})
