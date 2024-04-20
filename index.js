let menuBtn = document.querySelector('#menu-btn');
console.log(menuBtn);
let menu = document.querySelector('.menu');
console.log(menu);

menuBtn.addEventListener("click", () => {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});