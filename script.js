// ==============================
// MOTOZONE - JAVASCRIPT
// ==============================

// ANO AUTOMÁTICO NO RODAPÉ

const ano = new Date().getFullYear();

const rodape = document.querySelector("footer p:last-child");

if (rodape) {
    rodape.innerHTML = `&copy; ${ano} MotoZone. Todos os direitos reservados.`;
}


// ==============================
// ANIMAÇÃO AO APARECER NA TELA
// ==============================

const elementos = document.querySelectorAll(
    "#motos article, #categorias article, #sobre, #contato"
);

const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
            }
        });
    },
    {
        threshold: 0.15
    }
);

elementos.forEach((elemento) => {
    elemento.classList.add("animar");
    observador.observe(elemento);
});


// ==============================
// LINKS "VER MODELO"
// ==============================

const botoesModelo = document.querySelectorAll("#motos article a");

botoesModelo.forEach((botao) => {

    botao.addEventListener("click", (evento) => {

        evento.preventDefault();

        const moto = botao
            .closest("article")
            .querySelector("h3")
            .textContent;

        alert(
            `🏍️ ${moto}\n\nEm breve você poderá conferir mais detalhes sobre este modelo.`
        );
    });

});


// ==============================
// FORMULÁRIO DE CONTATO
// ==============================

const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const nome = document
            .querySelector("#nome")
            .value
            .trim();

        const email = document
            .querySelector("#email")
            .value
            .trim();

        const mensagem = document
            .querySelector("#mensagem")
            .value
            .trim();

        if (!nome || !email || !mensagem) {

            alert("⚠️ Preencha todos os campos antes de enviar.");

            return;
        }

        alert(
            `✅ Mensagem enviada!\n\nObrigado, ${nome}! A MotoZone recebeu sua mensagem.`
        );

        formulario.reset();
    });

}


// ==============================
// MENU ATIVO
// ==============================

const linksMenu = document.querySelectorAll("nav a");

linksMenu.forEach((link) => {

    link.addEventListener("click", () => {

        linksMenu.forEach((item) => {
            item.classList.remove("ativo");
        });

        link.classList.add("ativo");
    });

});