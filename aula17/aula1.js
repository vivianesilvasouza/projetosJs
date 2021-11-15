let varA = "A";
let varB = "B";
let varC = "C";

//primeiro exemplo
const varTemp = varA;
varA = varB;
varb = varC;
varC = varTemp;

//segundo exemplo mais moderno
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);
