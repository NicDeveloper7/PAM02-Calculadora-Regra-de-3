var resultado;
var resultado1;

function calcularregrade3() {

    var primeirovalor, segundovalor, terceirovalor;
    
    primeirovalor = document.getElementById('valor1').value
    segundovalor = document.getElementById('valor2').value
    terceirovalor = document.getElementById('valor3').value
   
    resultado1 = resultado;
    
    resultado = (segundovalor * terceirovalor) / primeirovalor



    document.getElementById('resultado').value = resultado

    document.getElementById('result').textContent = resultado

    document.getElementById('result1').textContent = resultado1

}



