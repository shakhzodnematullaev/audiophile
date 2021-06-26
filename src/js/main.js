let burger = document.querySelector(".hamburger");
let device = document.querySelector(".devices-burger__container");
let deviceitem = document.querySelector(".devices-burger__list-item");
let deviceitem2 = document.querySelector(".devices-burger__list-item2");
let deviceitem3 = document.querySelector(".devices-burger__list-item3");
let body = document.querySelector("body");

let cart = document.querySelector(".cart-link");
let modal = document.querySelector(".modal");
let modalspan =document.querySelector(".modal-span");

burger.addEventListener("click", function() {
    burger.classList.toggle("hamburger--active");
    device.classList.toggle("devices-burger__container--active");
    deviceitem.classList.toggle("devices-burger__list-item--active");
    deviceitem2.classList.toggle("devices-burger__list-item2--active");
    deviceitem3.classList.toggle("devices-burger__list-item3--active");
    body.classList.toggle("body");
});

cart.addEventListener("click", function() {
    modal.classList.toggle("modal--active");
    body.classList.toggle("body");
    modalspan.classList.toggle("modal-span--active");
})

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.classList.remove("modal--active")
        body.classList.remove("body");
    }
})