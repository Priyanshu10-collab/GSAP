var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function(event) {
    gsap.to(cursor,{
        x: event.clientX,
        y: event.clientY,
        duration:0.6,

        // ease:"back.out"
    })
});


imageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View More"

    gsap.to(cursor,{
        scale:4,
        backgroundColor:"#ffffff8a"
    })
})

imageDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""

    gsap.to(cursor,{
        scale:1,
         backgroundColor:"#fff"
    })
})