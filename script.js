// const menuBtn = document.getElementById("menu-btn");
// const navLinks = document.getElementById("nav-links");
// const elements = document.querySelectorAll(".nav > *:not(.nav-links)");
// const body = document.querySelector("body");
// menuBtn.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
// });
// elements.forEach(element => {
//     element.addEventListener("click", () => {
//         navLinks.style.display = "none";
//     });
// });
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent immediate closing
    navLinks.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (
        !navLinks.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }
});