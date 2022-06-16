import gsap from "gsap";

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
.from(".row",{
    y: "-630%",
    scale: .7,
    duration: 2,
    stagger: {
        amount: .4
    }
},"-=3")
.from(".repo-id",{
    y: "-601%",
    scale: .7,
    duration: 2,
    stagger: {
        amount: .4
    },
    opacity: 4
},"-=3")
