"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 23;
var avaliacao = 4.5;
// String
var nome = 'Danilo Freitas';
// Array
var idades = [23, 28, 45];
var idades2 = [23, 45, 67];
// Tuple
var jogadores;
jogadores = ['Danilo', 'Pedro', 'Vitor'];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
var retornoDaAPI = [123, 'Danilo', false];
var retornoDaAPI2 = {
// .......
};
// Void
function printarNaTela(msg) {
    console.log(msg);
}
;
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objeto) {
    // ...
}
;
criar({
    propriedade: 1,
});
// Never
function loopInfinito() {
    while (true) { }
}
;
function erro(mensagem) {
    throw new Error(mensagem);
}
;
function falha() {
    return erro('Algo falhou');
}
;
// Union Types
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 ".concat(nota));
}
;
exibirNota('10');
// type Funcionarios = Array<Funcionario>;
var funcionarios = [{
        nome: 'Danilo',
        sobrenome: "Freitas",
        dataNacimento: new Date()
    }, {
        nome: 'Tiago',
        sobrenome: "Oliveira",
        dataNacimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionario: ', funcionario.nome);
    }
}
;
var contato = {
    nome: 'Vitor',
    telefone1: "123456"
};
// Type Assertion
var minhaIdade = 23;
minhaIdade.toString;
// const input = document.getElementById("numero1") as HTMLInputElement;
var input = document.getElementById("numero1");
console.log(input.value);
