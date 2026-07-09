/* =========================================
   NAVBAR SHADOW
========================================= */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   FADE IN ON SCROLL
========================================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".fade-up").forEach(el => {

    observer.observe(el);

});


/* =========================================
   CARD HOVER TILT
========================================= */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 18;

        const rotateX = -(y - rect.height / 2) / 18;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/* =========================================
   BUTTON RIPPLE EFFECT
========================================= */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left =
            `${e.clientX - this.offsetLeft - radius}px`;

        circle.style.top =
            `${e.clientY - this.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});


/* =========================================
   IMAGE PARALLAX
========================================= */

window.addEventListener("scroll", () => {

    const images = document.querySelectorAll("#guide img");

    images.forEach(img => {

        const speed = window.scrollY * 0.02;

        img.style.transform = `translateY(${speed}px)`;

    });

});


/* =========================================
   HERO SCROLL EFFECT
========================================= */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    const y = window.scrollY * 0.3;

    hero.style.backgroundPositionY = `${y}px`;

});


/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
