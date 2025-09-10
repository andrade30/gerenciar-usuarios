const { retornarUsuarios } = require("../src/gerenciarUsuarios")
const { adicionarNovoUsuario } = require("../src/gerenciarUsuarios")
const { expect } = require('chai')

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        // 1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario({
            nome: 'Alessandro',
            email: 'alessandro@gospel.com'
    });
        // 2. Retornar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();
        // 3. Comparar se o novo nome está no fim da lista de usuários
        // at -> traz o último elemento da lista de usuários
        // expect(listaDeUsuarios.at(-1).nome).to.equal('Alessandro');
        // expect(listaDeUsuarios.at(-1).email).to.equal('alessandro@gospel.com');
        expect(listaDeUsuarios.at(-1)).to.eql({
            nome: 'Alessandro',
            email: 'alessandro@gospel.com'
        });
    });
});