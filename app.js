// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var elemc = document.querySelector(".elem-container");
var fixed = document.querySelector(".fixed-image");

elemc.addEventListener("mouseover",function(){
    fixed.style.visibility = "visible";
});
elemc.addEventListener("mouseleave",function(){
    fixed.style.visibility = "hidden";
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function(e) {
    e.addEventListener("mouseenter",function() {
        var image = e.getAttribute("data-image");
        fixed.style.background = `url(${image})`;
    });
});

let load = document.querySelector("#loader");
setTimeout(function(){
    console.log("hi");
    load.style.transform = "translateY(-100%)";;
},3200);

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "10",
        centeredSlides: true,
        spaceBetween: 60,
    });
}
swiperAnimation();


