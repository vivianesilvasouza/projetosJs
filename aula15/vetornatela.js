let valores = [8, 4, 7, 4, 9];
valores.sort();
/* for (let pos = 0; pos < valores.length; pos++) {
  console.log(`a posição ${pos} tem valor ${valores[pos]}`);
}

está certo, porem tem mais codigo 
 */

for (let pos in valores) {
  console.log(`a posição ${pos} tem o valor ${valores[pos]}`);
}
