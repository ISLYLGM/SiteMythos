
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

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {
        navigation.classList.remove("active");
    });

});


/* =====================================
   ANIMAÇÃO AO ENTRAR NA TELA
===================================== */

const animatedElements = document.querySelectorAll(
    ".feature-card, .app-card, .about-image"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    element.classList.add("hidden");
    observer.observe(element);

});


/* =====================================
   EFEITO DE APARIÇÃO
===================================== */

const animationStyle = document.createElement("style");

animationStyle.textContent = `
    .hidden {
        opacity: 0;
        transform: translateY(25px);
        transition:
            opacity 0.7s ease,
            transform 0.7s ease;
    }

    .hidden.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(animationStyle);
