const data = new Date('1987-4-21 00:00:00')
const diaSemana = data.getDay();
let diadasemanatexto;

if (diaSemana === 0) {
    diadasemanatexto = 'domingo';
} else if (diaSemana === 1) {
    diadasemanatexto = 'segunda';
}
else if (diaSemana === 2) {
    diadasemanatexto = 'terça'
}
else if (diaSemana === 3) {
    diadasemanatexto = 'quarta'
}
else if (diaSemana === 4) {
    diadasemanatexto = 'quinta'
}
else if (diaSemana === 5) {
    diadasemanatexto = 'sexta'
}
else if (diaSemana === 6) {
    diadasemanatexto = 'sabado'
}

console.log(diaSemana, diadasemanatexto)