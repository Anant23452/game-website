gsap.from(".navbar",{
        y:-100,
        duration:1,
        delay:.3

})

gsap.from("#left-img",{
    x:-300,
    duration:3,
    delay:.2
})
gsap.from("#right-img",{
    x:300,
    duration:3,
    delay:.2
})
gsap.from("#top-img",{
    y:-300,
    duration:3,
    delay:.2
})
gsap.from("#bottom-img",{
    y:300,
    duration:3,
    delay:.2
})
gsap.from("#main h1",{
    y:500,
    duration:3,
    
    opancity:0,
    stagger:.3
})
gsap.from("#main h5",{
    y:30,
    duration:2,
    repeat:-1,
    yoyo:true
})