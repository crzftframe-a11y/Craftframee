/* ==========================================
   CraftFrame - JavaScript
========================================== */

// Header qui change au scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});

// Apparition des sections au scroll
const elements = document.querySelectorAll(
    ".card, .price-card, .timeline div, .faq-item, .contact-info, .contact-form"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in", "show");
        }
    });
}, {
    threshold: 0.2
});

elements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
});

// Bouton retour en haut
const topButton = document.createElement("button");

topButton.id = "topButton";
topButton.innerHTML = "↑";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("visible");

    } else {

        topButton.classList.remove("visible");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Menu mobile
const menu = document.querySelector(".menu-mobile");
const nav = document.querySelector("nav");

if (menu) {

    menu.addEventListener("click", () => {

        if (nav.style.display === "flex") {

            nav.style.display = "none";

        } else {

            nav.style.display = "flex";
            nav.style.flexDirection = "column";
            nav.style.position = "absolute";
            nav.style.top = "85px";
            nav.style.left = "0";
            nav.style.width = "100%";
            nav.style.background = "#ffffff";
            nav.style.padding = "20px";
            nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
            nav.style.gap = "20px";
            nav.style.zIndex = "999";

        }

    });

}

// Fermer le menu après un clic
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 768) {

            nav.style.display = "none";

        }

    });

});

// Animation du bouton principal
const primaryButton = document.querySelector(".btn-primary");

if (primaryButton) {

    setInterval(() => {

        primaryButton.style.transform = "scale(1.05)";

        setTimeout(() => {

            primaryButton.style.transform = "scale(1)";

        }, 300);

    }, 3000);

}

// Message du formulaire
const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Merci ! Votre demande a bien été prise en compte. Nous vous répondrons rapidement.");

        form.reset();

    });

}

console.log("✅ CraftFrame chargé avec succès !");
