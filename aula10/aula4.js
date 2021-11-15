var agora = new Date();
var horario = agora.getHours();
console.log(`Agora são ${horario}`);
if (horario < 12) {
  console.log("bom dia!");
} else if (horario <= 18) {
  console.log("boa tarde");
} else if (horario >= 18) {
  console.log("boa noite!");
}
