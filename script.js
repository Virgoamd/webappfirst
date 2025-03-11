function locomotive() {

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}


locomotive()

function scroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

page4Animation()

// function slider(){
//     var swiper = new Swiper(".mySwiper", {
//         slidesPerView: "auto",
//         centeredSlides: true,
//         spaceBetween: 30,
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//       });
// }
// slider()

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
    });
}
swiperAnimation()

function menuAnimation() {
    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-screen")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
       
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
      
    })
    
}
menuAnimation()

setTimeout(function(){
   var loader = document.querySelector("#loader")
    loader.style.top = "-100%"
    
},4200)


function page6Animations() {
    gsap.from("#btm6-part2 h4, #btm6-part3 h4 , #btm6-part4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2 ,#btm6-part3 h4",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}
page6Animations()












