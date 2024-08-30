// gsap.from("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"yellow",
//     borderRadius:"50%"
// })

// gsap.to("#box2",{
//     x:600,
//     y:800,
//     duration:2,
//     delay:1,
//     rotate:180
// })

// gsap.from("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
// })
// gsap.from("#box2",{
//     x:600,
//     y:800,
//     duration:2,
//     delay:1,
// })

// gsap.to("h1",{
//     color:"aqua",
//     duration:2,
//     delay:1
// })

// gsap.from("h1",{
//     y:30,
//     opacity:0,
//     color:"orange",
//     duration:2,
//     delay:1,
//     stagger:0.3
// })

// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     repeat:-1,
//     borderRadius:"50%",
//     yoyo:true
// })

// gsap.to("#box1",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })

// gsap.to("#box2",{
//     x:1500,
//     backgroundColor:"yellow",
//     duration:1.5,
//     delay:2.5
// })

// gsap.to("#box3",{
//     x:1500,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4
// })

// var tl = gsap.timeline()

// tl.to("#box1",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })

// tl.to("#box2",{
//     x:1500,
//     backgroundColor:"yellow",
//     duration:1.5,
// })

// tl.to("#box3",{
//     x:1500,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
// })

var t1 = gsap.timeline()

t1.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.2
})

t1.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.2,
    stagger:0.2
})

t1.from("h1",{
    y:20,
    opacity:0,
    duration:1,
    scale:0.2
})