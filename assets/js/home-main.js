let cloud = document.getElementById("cloud");
let sun = document.getElementById("sun");
let sigiriya = document.getElementById("sigiriya");
let mount = document.getElementById("mount");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let value = this.window.scrollY;
    
    cloud.style.left = value * 0.25 + 'px';
    sun.style.top = value * 1.01 + 'px';
    sigiriya.style.top = value * 0.5 + 'px';
    mount.style.left = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
});