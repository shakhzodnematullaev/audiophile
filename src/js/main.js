let burger = document.querySelector(".hamburger");
let device = document.querySelector(".devices-burger__container");
let deviceitem = document.querySelector(".devices-burger__list-item");
let deviceitem2 = document.querySelector(".devices-burger__list-item2");
let deviceitem3 = document.querySelector(".devices-burger__list-item3");
let body = document.querySelector("body");

burger.addEventListener("click", function() {
    burger.classList.toggle("hamburger--active");
    device.classList.toggle("devices-burger__container--active");
    deviceitem.classList.toggle("devices-burger__list-item--active");
    deviceitem2.classList.toggle("devices-burger__list-item2--active");
    deviceitem3.classList.toggle("devices-burger__list-item3--active");
    body.classList.toggle("body");
});