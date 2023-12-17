const form = document.getElementById('form-deposito');

function validaValor(contaCompleta) {
    const contaComoArray =  contaCompleta.split('-');
    return contaComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado na conta: ${numeroContaBeneficiario.value}`;

    formEValido = validaValor(numeroContaBeneficiario.value)
    if (formEValido) {
        alert(mensagemSucesso);

        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else {
        alert("Conta incorreta");
    }
})

console.log(form);