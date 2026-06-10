const form = document.getElementById("formContato");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const texto = document.getElementById("mensagem").value;

    const mensagem =
`Olá, meu nome é ${nome}

Email: ${email}

Mensagem:
${texto}`;

    const url =
`https://wa.me/5585988618045?text=${encodeURIComponent(mensagem)}`;

    window.location.href = url;
});