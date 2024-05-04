let loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    // NOPE SHUT UP! SHHHHHHH!!!!!
    setTimeout(function() {
        loader.style.display = "none";
    }, 2000);
});



let star = document.getElementById("star");
let moon = document.getElementById("moon");
let elephant = document.getElementById("elephant");
let lighthouse = document.getElementById("lighthouse");
let mounb = document.getElementById("moun-back");
let mounf = document.getElementById("moun-front");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let header = document.getElementById("header");

console.log(header);

window.addEventListener('scroll', function() {
    console.log("Scroll event fired");

    let value = this.window.scrollY;
    
    star.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    elephant.style.top = value * 0.5 + 'px';
    elephant.style.left = value * 0.25 + 'px';
    lighthouse.style.bottom = value * 1.25 + 'px';
    mounb.style.top = value * 0.5 + 'px';
    mounf.style.left = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.transform = 'translateY(' + value * 0.6 + 'px)';

    console.log(header.style.top);
});