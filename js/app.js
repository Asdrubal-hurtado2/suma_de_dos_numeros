function Sumar(){
    var numero1 = document.getElementById('operando1').value 
    console.log(numero1)
    var numero2 = document.getElementById('operando2').value
    console.log(numero2)

    var resultado = parseInt(numero1) + parseInt(numero2)
      console.log(resultado);
    document.getElementById('resultado').value = parseInt(resultado);
}