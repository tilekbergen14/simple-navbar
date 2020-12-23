const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".res-nav")
hamburger.addEventListener("click", () => {
    navbar.classList.toggle("show")
})