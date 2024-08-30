var path = "M 10 100 Q 500 100 990 100";

var finalPath = "M 10 100 Q 500 100 990 100";

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
    // Dynamically update the y-coordinate in the path
    path = `M 10 100 Q ${dets.clientX} ${dets.clientY} 990 100`;

    gsap.to("svg path", {
        attr: { d: path },
        duration:0.2,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.8,
        ease:"elastic.ou(1,0.2)"
    })
})
