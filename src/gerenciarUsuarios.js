const usuarios = ['matheus', 'marcos', 'lucas', 'joão']

function retornarUsuarios () {
    return usuarios;
}

// push -> adiciona o nome na lista de usuários
function adicionarNovoUsuario(nome) {
    usuarios.push(nome);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}