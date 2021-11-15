const pontuacaoUsuario = 700;

const nivelusuario = pontuacaoUsuario >= 1000 ? 'usuario vip' : 'usuario normal'
const corusuario = null;
const corpadrao = corusuario || 'preta';
console.log(nivelusuario, corpadrao);

/* if (pontuacaoUsuario >= 1000) {
    console.log('usuario vip');
} else {
    console.log('usuario normal');
} */