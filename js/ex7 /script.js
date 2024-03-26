function converterParaCaixaAlta() {
    var inputString = document.getElementById("inputString").value;
    var resultadoElement = document.getElementById("resultado");

    if (inputString.trim() === "") {
        resultadoElement.textContent = "Por favor, insira uma string válida.";
        return;
    }

    var stringEmCaixaAlta = inputString.toUpperCase();
    resultadoElement.textContent = "String em Caixa Alta: " + stringEmCaixaAlta;
}
