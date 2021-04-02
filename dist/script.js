function converter(){
  var valorEmDolar = parseFloat(document.getElementById("valorEmDolar").value);
  
  
  var valorEmReal = (valorEmDolar * 5.50).toFixed(2);
  document.getElementById("receberValor").innerHTML = "O valor em reais é: R$"+valorEmReal;
  
}