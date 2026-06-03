// Criando Variáveis

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");

const button = document.querySelector("button");
const lista = document.querySelector(".lista");

// Evento botão

button.addEventListener("click", (event) => {
    event.preventDefault();

    // Pegando valores
    const nomeValue = nome.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;

    // Validação simples
    if (
        nomeValue === "" ||
        emailValue === "" ||
        telefoneValue === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    // Template HTML
    const templateHTML = `
        <li>
            <strong>Nome:</strong> ${nomeValue} <br>
            <strong>Email:</strong> ${emailValue} <br>
            <strong>Telefone:</strong> ${telefoneValue}
        </li>
    `;

    // Inserindo no HTML
    lista.innerHTML += templateHTML;

    // Limpando inputs
    nome.value = "";
    email.value = "";
    telefone.value = "";
});