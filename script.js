document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       NAVBAR
    =========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (navbar) {

            navbar.classList.toggle("scrolled", window.scrollY > 50);

        }

    });

    /* ===========================
       CARD TILT
    =========================== */

    document.querySelectorAll(".card, .feature-card, .team-card").forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = -(y - rect.height / 2) / 18;
            const rotateY = (x - rect.width / 2) / 18;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0)";

        });

    });

    /* ===========================
       CURSOR
    =========================== */

    const glow = document.querySelector(".cursor-glow");
    const dot = document.querySelector(".cursor-dot");

    if (glow && dot) {

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        let glowX = mouseX;
        let glowY = mouseY;

        document.addEventListener("mousemove", e => {

            mouseX = e.clientX;
            mouseY = e.clientY;

            dot.style.left = mouseX + "px";
            dot.style.top = mouseY + "px";

        });

        function animate() {

            glowX += (mouseX - glowX) * 0.12;
            glowY += (mouseY - glowY) * 0.12;

            glow.style.left = glowX + "px";
            glow.style.top = glowY + "px";

            requestAnimationFrame(animate);

        }

        animate();

    }

});