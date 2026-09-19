/* =====================================
   MENU MOBILE
===================================== */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


/* =====================================
   FECHAR MENU AO CLICAR
===================================== */

const navigationLinks =
    document.querySelectorAll(".navigation a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});


/* =====================================
   ELEMENTOS QUE APARECEM AO ENTRAR
   NA TELA
===================================== */

const animatedElements = document.querySelectorAll(
    ".feature-card, .app-card, .about-image, .mascot-card"
);


/* =====================================
   OBSERVADOR DE ANIMAÇÃO
===================================== */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


/* =====================================
   ATIVAR ANIMAÇÃO
===================================== */

animatedElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});


/* =====================================
   ANIMAÇÃO DOS MASCOTES
===================================== */

const mascotCards =
    document.querySelectorAll(".mascot-card");


mascotCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.12}s`;

});