/* primitivos (imutáveis) - string, number, boolean, undefined, - valores copiados 
 null (bigint, symbol) 
 
 referência (mutável)  - array, object, function - passados por referências 
 
 */

/* let nome = "viviane";
nome = "silva"; 
console.log(nome); */

/* let nome = "viviane";
nome[0] = "r"; // não é imutavel 
console.log(nome[0]); */

/* let a = "A";
let b = a; //copia
console.log(a, b); */

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(b);
