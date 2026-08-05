/*==========================================================
                CRAFTFRAME V2
            Premium JavaScript
==========================================================*/

"use strict";

/*==========================================================
                    ELEMENTS
==========================================================*/

const header = document.querySelector("header");

const scrollTopBtn = document.getElementById("scrollTop");

const cursorGlow = document.querySelector(".cursor-glow");

/*==========================================================
                HEADER AU SCROLL
==========================================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/*==========================================================
            BOUTON RETOUR EN HAUT
==========================================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        scrollTopBtn.classList.add("show");

    }else{

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==========================================================
            CURSEUR LUMINEUX
==========================================================*/

if(cursorGlow){

    document.addEventListener("mousemove",(e)=>{

        cursorGlow.style.left = e.clientX + "px";

        cursorGlow.style.top = e.clientY + "px";

    });

}

/*==========================================================
            SCROLL FLUIDE ANCRES
==========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    });

});

/*==========================================================
            EFFET PARALLAX LÉGER
==========================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    if(!hero) return;

    const offset = window.pageYOffset;

    hero.style.backgroundPositionY = `${offset * 0.3}px`;

});/*==========================================================
                REVEAL ON SCROLL
==========================================================*/

const revealElements = document.querySelectorAll(
`
.reveal,
section,
.service-card,
.why-card,
.portfolio-card,
.mockup-card,
.testimonial-card,
.feature,
.advantage-card,
.comparison-card,
.step,
.faq-item,
.contact-box,
.stat
`
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");
            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

},{
    threshold:.15
});

revealElements.forEach((element,index)=>{

    element.style.transitionDelay = `${index * 70}ms`;

    observer.observe(element);

});

/*==========================================================
                STAGGER ANIMATIONS
==========================================================*/

const staggerGroups = [

    ".services-grid .service-card",

    ".why-grid .why-card",

    ".portfolio-grid .portfolio-card",

    ".gallery-grid .mockup-card",

    ".testimonials-grid .testimonial-card",

    ".features .feature",

    ".advantages .advantage-card"

];

staggerGroups.forEach(selector=>{

    const cards = document.querySelectorAll(selector);

    cards.forEach((card,index)=>{

        card.style.transitionDelay = `${index * 120}ms`;

    });

});

/*==========================================================
                HERO ANIMATION
==========================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

    const heroTitle = document.querySelector(".hero-left h1");
    const heroText = document.querySelector(".hero-left p");
    const heroButtons = document.querySelector(".hero-buttons");

    if(heroTitle){

        heroTitle.style.opacity = "1";
        heroTitle.style.transform = "translateY(0)";

    }

    if(heroText){

        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";

    }

    if(heroButtons){

        heroButtons.style.opacity = "1";
        heroButtons.style.transform = "translateY(0)";

    }

});

/*==========================================================
                IMAGE HOVER
==========================================================*/

document.querySelectorAll(".portfolio-card img, .mockup-card img").forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.08)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

});/*==========================================================
                    FAQ ACCORDÉON
==========================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const isOpen = item.classList.contains("active");

        // Ferme toutes les autres questions
        faqItems.forEach(faq => {

            faq.classList.remove("active");

            const faqAnswer = faq.querySelector(".faq-answer");

            faqAnswer.style.maxHeight = null;

        });

        // Si elle était déjà ouverte, on s'arrête ici
        if(isOpen) return;

        // Ouvre la question sélectionnée
        item.classList.add("active");

        answer.style.maxHeight = answer.scrollHeight + "px";

    });

});

/*==========================================================
                OUVRIR LA PREMIÈRE FAQ
==========================================================*/

window.addEventListener("load", () => {

    if(faqItems.length > 0){

        faqItems[0].classList.add("active");

        const firstAnswer = faqItems[0].querySelector(".faq-answer");

        firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";

    }

});

/*==========================================================
                EFFET DE SURVOL FAQ
==========================================================*/

faqItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "translateY(-6px)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "";

    });

});

/*==========================================================
            ANIMATION DES CARTES FAQ
==========================================================*/

const faqObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.animate([

                {
                    opacity:0,
                    transform:"translateY(40px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],{

                duration:700,

                easing:"ease-out",

                fill:"forwards"

            });

            faqObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.2
});

faqItems.forEach(item => {

    faqObserver.observe(item);

});/*==========================================================
                    MENU MOBILE
==========================================================*/

const mobileMenu = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

if (mobileMenu && nav) {

    /*=========================
            OUVERTURE
    =========================*/

    mobileMenu.addEventListener("click", () => {

        nav.classList.toggle("active");
        mobileMenu.classList.toggle("active");

        document.body.classList.toggle("menu-open");

        if (mobileMenu.classList.contains("active")) {

            mobileMenu.innerHTML = "✕";

        } else {

            mobileMenu.innerHTML = "☰";

        }

    });

    /*=========================
        FERMER APRÈS UN CLIC
    =========================*/

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");
            mobileMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

            mobileMenu.innerHTML = "☰";

        });

    });

    /*=========================
        CLIC À L'EXTÉRIEUR
    =========================*/

    document.addEventListener("click", (event) => {

        const clickInsideNav = nav.contains(event.target);
        const clickOnButton = mobileMenu.contains(event.target);

        if (!clickInsideNav && !clickOnButton && nav.classList.contains("active")) {

            nav.classList.remove("active");
            mobileMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

            mobileMenu.innerHTML = "☰";

        }

    });

}

/*==========================================================
                HEADER MASQUÉ AU SCROLL
==========================================================*/

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {

        header.style.transform = "translateY(0)";
        return;

    }

    if (currentScroll > lastScroll && currentScroll > 150) {

        header.style.transform = "translateY(-100%)";

    } else {

        header.style.transform = "translateY(0)";

    }

    lastScroll = currentScroll;

});

/*==========================================================
            RACCOURCI CLAVIER
==========================================================*/

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        nav.classList.remove("active");

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

        mobileMenu.innerHTML = "☰";

    }

});

/*==========================================================
            BLOQUER LE SCROLL
==========================================================*/

const observerMenu = new MutationObserver(() => {

    if (document.body.classList.contains("menu-open")) {

        document.body.style.overflow = "hidden";

    } else {

        document.body.style.overflow = "";

    }

});

observerMenu.observe(document.body, {

    attributes: true,

    attributeFilter: ["class"]

});/*==========================================================
                    CARTES 3D
==========================================================*/

const cards = document.querySelectorAll(
`
.service-card,
.why-card,
.portfolio-card,
.mockup-card,
.testimonial-card,
.feature,
.advantage-card,
.comparison-card
`
);

cards.forEach(card=>{

    card.style.transformStyle="preserve-3d";
    card.style.transition="transform .18s ease";

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - .5) * 18;
        const rotateX = ((y / rect.height) - .5) * -18;

        card.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
            scale(1.02)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transition="transform .45s ease";

        card.style.transform=`
            perspective(1200px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0)
            scale(1)
        `;

        setTimeout(()=>{

            card.style.transition="transform .18s ease";

        },450);

    });

});

/*==========================================================
                REFLET LUMINEUX
==========================================================*/

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = ((e.clientX-rect.left)/rect.width)*100;
        const y = ((e.clientY-rect.top)/rect.height)*100;

        card.style.background = `
        radial-gradient(
            circle at ${x}% ${y}%,
            rgba(255,255,255,.35),
            rgba(255,255,255,.08) 35%,
            white 70%
        )
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="";

    });

});

/*==========================================================
                BOUTONS PREMIUM
==========================================================*/

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="";

    });

});

/*==========================================================
            EFFET SUR LE LOGO
==========================================================*/

const logo = document.querySelector(".logo img");

if(logo){

    logo.addEventListener("mouseenter",()=>{

        logo.style.transform="rotate(-8deg) scale(1.08)";

    });

    logo.addEventListener("mouseleave",()=>{

        logo.style.transform="";

    });

}/*==========================================================
                COMPTEURS ANIMÉS
==========================================================*/

const stats = document.querySelectorAll(".stat h2");

function animateCounter(counter){

    const target = Number(counter.dataset.target);

    if(isNaN(target)) return;

    const duration = 2000;

    const start = performance.now();

    function update(time){

        const progress = Math.min((time - start) / duration, 1);

        const ease = 1 - Math.pow(1 - progress, 3);

        const value = Math.floor(ease * target);

        if(target >= 100){

            counter.textContent = value + "+";

        }else{

            counter.textContent = value;

        }

        if(progress < 1){

            requestAnimationFrame(update);

        }else{

            counter.textContent = target >= 100 ? target + "+" : target;

        }

    }

    requestAnimationFrame(update);

}

/*==========================================================
            OBSERVER DES COMPTEURS
==========================================================*/

const statsObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            animateCounter(counter);

            statsObserver.unobserve(counter);

        }

    });

},{
    threshold:0.4
});

stats.forEach(counter=>{

    statsObserver.observe(counter);

});

/*==========================================================
            BARRES DE PROGRESSION
==========================================================*/

const progressBars = document.querySelectorAll(".progress-fill");

const progressObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const bar = entry.target;

            const value = bar.dataset.width || "100";

            bar.style.width = value + "%";

            progressObserver.unobserve(bar);

        }

    });

},{
    threshold:0.4
});

progressBars.forEach(bar=>{

    bar.style.width = "0%";

    progressObserver.observe(bar);

});

/*==========================================================
            ANIMATION DES STATS
==========================================================*/

document.querySelectorAll(".stat").forEach(stat=>{

    stat.addEventListener("mouseenter",()=>{

        stat.style.transform="translateY(-8px) scale(1.03)";

    });

    stat.addEventListener("mouseleave",()=>{

        stat.style.transform="";

    });

});

/*==========================================================
            EFFET SUR LES ICÔNES
==========================================================*/

document.querySelectorAll(".service-icon,.why-icon,.info-icon").forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.animate([

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(1.15) rotate(-8deg)"
            },

            {
                transform:"scale(1)"
            }

        ],{

            duration:500,

            easing:"ease"

        });

    });

});/*==========================================================
                PREMIUM EFFECTS
==========================================================*/

/*=========================
        PARALLAX HERO
=========================*/

const heroSection = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-container");

window.addEventListener("mousemove",(e)=>{

    if(!heroSection || !heroContent) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    heroContent.style.transform = `
        translate3d(${x}px, ${y}px, 0)
    `;

});

/*=========================
        CURSOR GLOW
=========================*/

const glow = document.querySelector(".cursor-glow");

if(glow){

    document.addEventListener("mousemove",(e)=>{

        requestAnimationFrame(()=>{

            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";

        });

    });

}

/*=========================
    BOUTONS MAGNÉTIQUES
=========================*/

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;

        button.style.transform = `
            translate(${x*0.15}px, ${y*0.15}px)
            scale(1.05)
        `;

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="";

    });

});

/*=========================
    FLOATING LAPTOP
=========================*/

const laptop = document.querySelector(".laptop");

if(laptop){

    let angle = 0;

    function animateLaptop(){

        angle += 0.01;

        laptop.style.transform = `
            rotateX(${Math.sin(angle)*4}deg)
            rotateY(${Math.cos(angle)*6}deg)
            translateY(${Math.sin(angle)*8}px)
        `;

        requestAnimationFrame(animateLaptop);

    }

    animateLaptop();

}

/*=========================
    RIPPLE EFFECT
=========================*/

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("click",(e)=>{

        const ripple = document.createElement("span");

        const rect = button.getBoundingClientRect();

        ripple.style.position = "absolute";
        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";
        ripple.style.width = "12px";
        ripple.style.height = "12px";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,.45)";
        ripple.style.transform = "translate(-50%,-50%)";
        ripple.style.pointerEvents = "none";
        ripple.style.animation = "ripple .6s ease-out";

        button.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

/*=========================
    ANIMATION DES ICÔNES
=========================*/

document.querySelectorAll(".service-icon,.why-icon,.info-icon").forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transform="rotate(-10deg) scale(1.12)";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.transform="";

    });

});

/*=========================
    TITRES PREMIUM
=========================*/

document.querySelectorAll(".section-title h2").forEach(title=>{

    title.addEventListener("mouseenter",()=>{

        title.style.letterSpacing="-2px";

    });

    title.addEventListener("mouseleave",()=>{

        title.style.letterSpacing="";

    });

});/*==========================================================
            CRAFTFRAME - FINAL SCRIPT
==========================================================*/

/*=========================
    DEBOUNCE
=========================*/

function debounce(func, delay = 100){

    let timeout;

    return (...args)=>{

        clearTimeout(timeout);

        timeout = setTimeout(()=>{

            func(...args);

        },delay);

    };

}

/*=========================
    REDIMENSIONNEMENT
=========================*/

window.addEventListener("resize",debounce(()=>{

    if(window.innerWidth > 992){

        const nav=document.querySelector("nav");
        const mobile=document.querySelector(".mobile-menu");

        if(nav){

            nav.classList.remove("active");

        }

        if(mobile){

            mobile.classList.remove("active");

            mobile.innerHTML="☰";

        }

        document.body.classList.remove("menu-open");

        document.body.style.overflow="";

    }

},150));

/*=========================
    CHARGEMENT
=========================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

    document.querySelectorAll(".fade-in").forEach((element,index)=>{

        element.style.animation=`
            fadeUp .8s ease forwards
        `;

        element.style.animationDelay=`${index*0.08}s`;

    });

});

/*=========================
    IMAGES
=========================*/

document.querySelectorAll("img").forEach(img=>{

    img.loading="lazy";

    img.draggable=false;

});

/*=========================
    BOUTONS
=========================*/

document.querySelectorAll("button,.btn").forEach(button=>{

    button.addEventListener("mousedown",()=>{

        button.style.transform+=" scale(.97)";

    });

    button.addEventListener("mouseup",()=>{

        button.style.transform=button.style.transform.replace(" scale(.97)","");

    });

});

/*=========================
    LIENS EXTERNES
=========================*/

document.querySelectorAll("a").forEach(link=>{

    if(link.hostname!==window.location.hostname && link.hostname!==""){

        link.setAttribute("target","_blank");

        link.setAttribute("rel","noopener noreferrer");

    }

});

/*=========================
    PERFORMANCE
=========================*/

window.addEventListener("scroll",debounce(()=>{

    document.documentElement.style.setProperty(

        "--scroll",

        window.scrollY

    );

},10),{

    passive:true

});

/*=========================
    MESSAGE CONSOLE
=========================*/

console.clear();

console.log("%cCraftFrame","font-size:28px;font-weight:bold;color:#16A34A;");
console.log("%cSite développé avec HTML • CSS • JavaScript","font-size:14px;color:#64748B;");
console.log("%chttps://craftframe.fr","font-size:14px;color:#16A34A;");

/*=========================
    FIN
=========================*/

console.log("✅ CraftFrame initialisé avec succès.");
