// Criando Variaveis

const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

// Criando função
// () => e function() msm coisa

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Olá", nome.value);
    const inputValue = nome.value;
    const templateHTML = `<li>${inputValue}</li>`;

    // Incluir itens no HTML
    lista.innerHTML += templateHTML;

    // Limpar campo
    nome.value = "";
});