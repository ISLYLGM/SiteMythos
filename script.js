
/* =====================================
   MENU MOBILE
===================================== */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("active");

        const isOpen =
            navigation.classList.contains("active");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Fechar menu"
                : "Abrir menu"
        );

        menuButton.textContent =
            isOpen ? "✕" : "☰";

    });

}



/* =====================================
   FECHAR MENU AO CLICAR
===================================== */

const navigationLinks =
    document.querySelectorAll(
        ".navigation a"
    );


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Abrir menu"
            );

            menuButton.textContent = "☰";

        }

    });

});


/* =====================================
   ANIMAÇÕES DE ENTRADA
===================================== */

const animatedElements =
    document.querySelectorAll(
        ".feature-card, " +
        ".app-card, " +
        ".app-rive, " +
        ".about-image, " +
        ".mascot-card, " +
        ".product-card, " +
        ".about-highlight"
    );


/* =====================================
   OBSERVADOR DE ANIMAÇÃO
===================================== */

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

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

animatedElements.forEach(
    (element, index) => {

        element.classList.add("hidden");

        /*
         * Pequeno atraso entre os elementos
         * para criar efeito sequencial.
         */

        element.style.transitionDelay =
            `${index * 0.12}s`;

        observer.observe(element);

    }
);


/* =====================================
   ANIMAÇÃO DOS MASCOTES
===================================== */

const mascotCards =
    document.querySelectorAll(
        ".mascot-card"
    );


mascotCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.12}s`;

});


/* =====================================
   CATEGORIAS DO CARDÁPIO
===================================== */

const categories =
    document.querySelectorAll(
        ".category"
    );

const products =
    document.querySelectorAll(
        ".product-card"
    );


categories.forEach((category) => {

    category.addEventListener(
        "click",
        () => {

            /* Remove ativo dos outros */

            categories.forEach((item) => {

                item.classList.remove(
                    "active"
                );

            });


            /* Ativa o botão clicado */

            category.classList.add(
                "active"
            );


            /* Categoria selecionada */

            const selectedCategory =
                category.dataset.category;


            /* Filtra os produtos */

            products.forEach((product) => {

                const productCategory =
                    product.dataset.category;


                if (
                    selectedCategory === "todos" ||
                    productCategory === selectedCategory
                ) {

                    product.classList.remove(
                        "hidden-product"
                    );

                } else {

                    product.classList.add(
                        "hidden-product"
                    );

                }

            });

        }
    );

});


/* =====================================
   BOTÕES DOS PRODUTOS
===================================== */

const productButtons =
    document.querySelectorAll(
        ".product-bottom button"
    );


productButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const originalText =
                button.textContent;


            button.textContent = "✓";

            button.classList.add(
                "added"
            );


            setTimeout(() => {

                button.textContent =
                    originalText;

                button.classList.remove(
                    "added"
                );

            }, 900);

        }
    );

});


/* =====================================
   HEADER AO ROLAR
===================================== */

const header =
    document.querySelector(
        ".header"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!header) return;


        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 15px 40px rgba(67, 42, 85, 0.13)";

            header.style.background =
                "rgba(255, 255, 255, 0.92)";

        } else {

            header.style.boxShadow =
                "0 15px 40px rgba(67, 42, 85, 0.08)";

            header.style.background =
                "rgba(255, 255, 255, 0.82)";

        }

    }
);


/* =====================================
   APP CARDS — EFEITO AO PASSAR O MOUSE
===================================== */

const appCards =
    document.querySelectorAll(
        ".app-card"
    );


appCards.forEach((card) => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-8px) scale(1.02)";

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0) scale(1)";

        }
    );

});


/* =====================================
   RIVE — STARS.RIV
===================================== */

const riveCanvas =
    document.getElementById(
        "riveApp"
    );


if (
    riveCanvas &&
    typeof rive !== "undefined"
) {

    let riveApp;


    riveApp =
        new rive.Rive({

            src: "imagens/stars.riv",

            canvas: riveCanvas,

            autoplay: true,

            fit: rive.Fit.contain,

            alignment:
                rive.Alignment.center,

            onLoad: () => {

                riveApp.resizeDrawingSurfaceToCanvas();

            }

        });


    window.addEventListener(
        "resize",
        () => {

            if (riveApp) {

                riveApp.resizeDrawingSurfaceToCanvas();

            }

        }
    );

}
