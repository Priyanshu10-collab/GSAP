function page1Animation(){
    var tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button",{
        y:-40,
        duration:0.7,
        delay:0.5,
        opacity:0,
        stagger:0.2,
        ease: "power2.out"
    });

    tl.from(".center-part1 h1",{
        x:-100,
        opacity:0,
        duration:0.4,
        ease: "power2.out"
    },"-=0.3");

    tl.from(".center-part1 p",{
        x:100,
        opacity:0,
        duration:0.4,
        ease: "power2.out"
    });

    tl.from(".center-part1 button",{
        opacity:0,
        duration:0.4,
        ease: "power2.out"
    });

    tl.from(".center-part2 img",{
        opacity:0,
        duration:0.4,
        x:200,
        ease: "power2.out"
    },"-=0.7");

    tl.from(".section1Bottom img",{
        opacity:0,
        y:30,
        stagger:0.15,
        duration:0.6,
        ease: "power2.out"
    });
}

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 75%",  // Adjusted for earlier triggering
            end:"top 25%",   // Adjusted for better coverage
            scrub:2,
            markers: true,  // Enable markers for debugging
        }
    });

    tl2.from(".services",{
        y:30,
        opacity:0,
        duration:0.6,
        ease: "power2.out"
    });

    tl2.from(".elem.line1.left",{
        x:300,
        opacity:0,
        duration:1,
        ease: "power2.out"
    });

    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1,
        ease: "power2.out"
    });

    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1,
        ease: "power2.out"
    });
}

page1Animation();
page2Animation();
