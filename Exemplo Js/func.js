function minhaFuncao() {
    document.write("Olá, esta é a minha função!");
}

function pularLinha() {
    document.write("<br><br/>");
}

function mostrarNome(nome) {
    pularLinha();
    document.write(nome);
    pularLinha();
}

minhaFuncao();
pularLinha();
minhaFuncao();
pularLinha();
mostrarNome("João");