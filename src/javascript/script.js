const form = document.getElementById("formContato");
const resposta = document.getElementById("resposta");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    resposta.innerHTML = `Mensagem enviada com sucesso! Obrigado pelo contato, ${nome}.`;

    form.reset();
});