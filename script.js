
function text1function() {
    const text1 = document.getElementById("text1");
    text1.style.opacity = "0";
}
function text2function() {
    const text2 = document.getElementById("text2");
    text2.style.opacity = "0";
}
function text3function() {
    const text3 = document.getElementById("text3");
    text3.style.opacity = "0";
}
function text4function() {
    const text4= document.getElementById("text4");
    text4.style.opacity = "0";
}


gsap.to("#section2 #img3",{
    bottom: "-5%",
    duration:1,
    scrollTrigger:{
        trigger:"#section2 #img3",
        scroller:"body",
        // markers:true,
        start:"-100% 80%",
        end:"-60% 60%",
        scrub:1,
    }   
})
gsap.to("#section2 #img4",{
    bottom: "-10%",
    right:"20%",
    duration: 1,
    scrollTrigger:{
        trigger:"#section2 #img4",
        scroller:"body",
        // markers:true,
        start:"-100% 80%",
        end: "-60% 60%",
        scrub:1,
    }
})
gsap.to("#section2 #img2",{
    bottom: "-10%",
    left:"20%",
    duration: 1,
    scrollTrigger:{
        trigger:"#section2 #img2",
        scroller:"body",
        // markers:true,
        start:"-100% 80%",
        end: "-60% 60%",
        scrub:1,
    }
})
gsap.to("#section2 #img1",{
    bottom: "-15%",
    left:"10%",
    duration: 1,
    scrollTrigger:{
        trigger:"#section2 #img1",
        scroller:"body",
        // markers:true,
        start:"-100% 80%",
        end: "-60% 60%",
        scrub:1,
    }
})
gsap.to("#section2 #img5",{
    bottom: "-15%",
    right:"10%",
    duration: 1,
    scrollTrigger:{
        trigger:"#section2 #img5",
        scroller:"body",
        // markers:true,
        start:"-100% 80%",
        end: "-60% 60%",
        scrub:1,
    }
})
gsap.to("#section5 .text #text1",{
    opacity:1,
    duration: 1,
    scrollTrigger:{
        trigger:"#section5 .text #text1",
        scroller:"body",
        // markers:true,
        start:"100% 80%",
        end:"80% 40%",
        scrub:1,

    },
    onComplete: () =>{
        text1function();
    }
})
gsap.to("#section5 .text #text2",{
    opacity:1,
    duration: 1,
    scrollTrigger:{
        trigger:"#section5 .text #text2",
        scroller:"body",
        // markers:true,
        start:"90% 90%",
        end:"90% 50%",
        scrub:1,

    },
    onComplete: () => {
        text2function();
    }
})
gsap.to("#section5 .text #text3",{
    opacity:1,
    duration: 1,
    scrollTrigger:{
        trigger:"#section5 .text #text3",
        scroller:"body",
        // markers:true,
        start:"90% 90%",
        end:"90% 50%",
        scrub:1,

    },
    onComplete: () => {
        text3function();
    }
})
gsap.to("#section5 .text #text4",{
    opacity:1,
    duration: 1,
    scrollTrigger:{
        trigger:"#section5 .text #text4",
        scroller:"body",
        // markers:true,
        start:"90% 90%",
        end:"90% 50%",
        scrub:1,

    },
    onComplete: () => {
        text4function();
    }
})

gsap.to("#section5 .phone #phoneimgbox .phoneimage",{
    x:"-100%",  
    duration: 1,
    scrollTrigger:{
        trigger:"#section5 .phone #phoneimgbox .phoneimage",
        scroller:"body",
        // markers:true,
        start: "150% 90%",
        end: "90% 50%",
        scrub:1,

    }
})
gsap.to("#section5 .phone #phoneimgbox .phoneimage",{
    x:"-200%",  
    duration: 1,
    scrollTrigger:{
        trigger:"#section5 .phone #phoneimgbox .phoneimage",
        scroller:"body",
        // markers:true,
        start: "250% 90%",
        end: "90% 50%",
        scrub:1,

    }
})
gsap.to("#section5 .phone #phoneimgbox .phoneimage",{
    x:"-300%",  
    duration: 1,
    scrollTrigger:{
        trigger:"#section5 .phone #phoneimgbox .phoneimage",
        scroller:"body",
        // markers:true,
        start: "350% 90%",
        end: "90% 50%",
        scrub:1,

    }
})

