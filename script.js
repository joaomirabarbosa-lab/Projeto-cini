/* ==================================================
   MENU MOBILE
================================================== */

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}


/* ==================================================
   FECHAR MENU AO CLICAR
================================================== */

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


/* ==================================================
   ANO AUTOMÁTICO
================================================== */

const year = document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ==================================================
   MODAL DOS PRODUTOS
================================================== */

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");

const modalClose =
    document.getElementById("modalClose");

const modalOk =
    document.getElementById("modalOk");

const discoverButtons =
    document.querySelectorAll(".discover");


function openModal(flavor) {

    modalTitle.textContent =
        `Cini ${flavor}`;

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

}


function closeModal() {

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

}


discoverButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const flavor =
                button.dataset.flavor;

            openModal(flavor);

        }
    );

});


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


if (modalOk) {

    modalOk.addEventListener(
        "click",
        closeModal
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeModal();

            }

        }
    );

}


/* ==================================================
   ESC FECHA MODAL
================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


/* ==================================================
   ANIMAÇÃO AO ENTRAR NA TELA
================================================== */

const animatedElements =
    document.querySelectorAll(
        ".product-card, .history-text, .history-image, .experience-box"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(
    element => {

        observer.observe(element);

    }
);


/* ==================================================
   EFEITO PARALLAX SUTIL NO HERO
================================================== */

const heroProduct =
    document.querySelector(
        ".hero-product"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!heroProduct) return;

        const scroll =
            window.scrollY;

        if (scroll < 800) {

            heroProduct.style.transform =
                `translateY(${scroll * 0.08}px)`;

        }

    }
);
