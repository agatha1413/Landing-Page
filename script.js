// ===============================
// MOTOZONE - SCRIPT.JS
// ===============================

// Menu suave ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ===============================
// HEADER AO ROLAR A PÁGINA
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ===============================
// BOTÕES "VER MODELO"
// ===============================

const modelButtons = document.querySelectorAll(".model-card .button");

modelButtons.forEach(button => {
    button.addEventListener("click", () => {

        const card = button.closest(".model-card");

        if (!card) return;

        const name = card.querySelector("h3")?.textContent || "Modelo";

        alert(
            `Você selecionou a ${name}!\n\n` +
            "Em breve você poderá visualizar todos os detalhes desse modelo."
        );
    });
});


// ===============================
// FORMULÁRIO DE CONTATO
// ===============================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector("textarea");

        const name = nameInput?.value.trim();
        const email = emailInput?.value.trim();
        const message = messageInput?.value.trim();

        if (!name || !email || !message) {
            alert("Preencha todos os campos antes de enviar.");
            return;
        }

        alert(
            `Obrigado, ${name}!\n\n` +
            "Sua mensagem foi enviada com sucesso."
        );

        contactForm.reset();
    });
}


// ===============================
// ANIMAÇÃO AO APARECER NA TELA
// ===============================

const animatedElements = document.querySelectorAll(
    ".feature-card, .category-card, .model-card, .tech-card, .stat"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(element => {
    observer.observe(element);
});


// ===============================
// EFEITO NOS LINKS DO MENU
// ===============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});


// ===============================
// ANO AUTOMÁTICO DO RODAPÉ
// ===============================

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ===============================
// EFEITO DE ENTRADA DA PÁGINA
// ===============================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

console.log("MOTOZONE carregado com sucesso! 🏍️");