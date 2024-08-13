
function Locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".smooth-scroll"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".smooth-scroll", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
    }); 
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    

}

// Locomotive()

function Effect() {
    var page1content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#mouse-mover")

    page1content.addEventListener("mousemove", function (e) {
        gsap.to(cursor, {
            x: e.x,
            y: e.y,
        })
    })

    page1content.addEventListener("mouseenter", function () {
    
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })
    page1content.addEventListener("mouseleave", function () {
      
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
};
Effect();
function Page2_annimation(){


}

var tl = gsap.timeline()




tl.from("#loader h3",{
    x: 40,
    opacity: 0,
    duration: 1.2,
    stagger:0.3,
})

tl.to("#loader h3", {
    y: -400,
    duration:0.6,
    stagger: 0.2,
  
})


tl.to("#loader", {
    opacity: 0,
   
    duration: 1,
})
tl.to("#loader", {
  
    display: "none",
    duration: 0.2,
})


tl.from(" #page1-content h1 span", {
    y: 100,
    opacity: 0,
    duration:0.3,
    stagger:0.2,
    
})



