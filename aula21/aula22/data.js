/* /* const tresHoras = 60 * 60 * 3 * 1000;
const data = new Date(); //sempre que usar new vc ta falando de uma função contrutora e sempre será maiuscula  */
/* const data = new Date(1633348748397);
console.log('dia', data.getDate());
console.log('mês', data.getMonth() + 1);
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('dia semana', data.getDay()); */
/* console.log(data.toString()); */
/* console.log(Date.now()) */

function zeroesquerdo(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatardata() {
    const dia = zeroesquerdo(data.getDate());
    const mes = zeroesquerdo(data.getMonth() + 1);
    const ano = zeroesquerdo(data.getFullYear());
    const hora = zeroesquerdo(data.getHours());
    const min = zeroesquerdo(data.getMinutes());
    const seg = zeroesquerdo(data.getSeconds());

    return ` ${dia}/${mes}/${ano}/${hora}/${min}/${seg}/`
}
const data = new Date();
const databrasil = formatardata(data);
console.log(databrasil);



