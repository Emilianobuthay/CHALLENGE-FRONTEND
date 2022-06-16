import gsap from "gsap";


export function gsapp(){


    const tl = gsap.timeline();
tl.from(".header",{
    y: "-150%",
    duration: 5,
    opacity: 2
})
tl.from(".logos",{
    x: "-150%",
    duration: 1,
    opacity: 4
})
tl.from(".bola",{
    x: "250%",
    duration: 1,
    opacity: 4
})


    return;
}
