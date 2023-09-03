export {open, close};

const close = document.querySelector(".close");
const open = document.querySelector(".hamburger-icon");
const nav = document.querySelector("#nav");
const icon = document.querySelector(".icon");
const navicon = document.querySelector(".nav-icon");

open.addEventListener("click", ()=>{
    nav.classList.add("active");
    close.classList.add("active");
    open.classList.add("active");
    navicon.classList.add("active");
    icon.classList.add("active");
})

close.addEventListener("click", ()=>{
    open.classList.remove("active");
    close.classList.remove("active");
    nav.classList.remove("active");
    navicon.classList.remove("active");
    icon.classList.remove("active");
})