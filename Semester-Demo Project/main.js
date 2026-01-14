const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {
    // hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links li a");
navItems.forEach(item => {
    item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        // navLinks.classList.remove("active");
    });
});

// Smooth scrolling for nav bar
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 350) {
        nav.classList.add("sticky-active");
    } else {
        nav.classList.remove("sticky-active");
    }
});