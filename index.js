let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap.to(".marquee__part", {
  xPercent: -100,
  repeat: -1,
  duration: 10,
  ease: "linear",
}).totalProgress(.5);

gsap.set(".marquee_inner", {
    xPercent: -50,
})

window.addEventListener("scroll", () => {
    if(window.scrollY > currentScroll) {
        isScrollingDown = true;
    } else {        
        isScrollingDown = false;
    }

    gsap.to(tween, {
        timeScale:isScrollingDown ? 1 : -1,
    });

    currentScroll = window.scrollY;
});