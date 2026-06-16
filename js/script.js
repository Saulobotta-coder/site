const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("fechado");

    if(menu.classList.contains("fechado")){
        menuToggle.innerHTML = "☰";
    } else {
        menuToggle.innerHTML = "✖";
    }

});