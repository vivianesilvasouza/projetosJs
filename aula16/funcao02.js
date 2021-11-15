/* function soma(n1, n2) {
  return n1 + n2;
}
console.log(soma(7)); 

neste exemplo ele vai te dar um resultado NaN, pois passou apenas um 
número, o outro está vazio, então será considerado não número*/

function soma(n1 = 0, n2 = 0) {
  return n1 + n2;
}
console.log(soma(7));

//porem quando se coloca =0 parametros pre definidos ele já passa a vale como número
