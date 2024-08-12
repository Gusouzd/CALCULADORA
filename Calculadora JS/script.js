function adicionarValor(valor) {
    document.getElementById('resultado').value += valor;
}

function calcular() {
    try {
        let expressao = document.getElementById('resultado').value;
        let resultado = eval(expressao);
        document.getElementById('resultado').value = resultado;
    } catch (e) {
        alert('Expressão inválida');
    }
}

function limpar() {
    document.getElementById('resultado').value = '';
}
