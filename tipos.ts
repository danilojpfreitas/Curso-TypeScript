// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = 'Danilo Freitas';

// Array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [23, 45, 67];

// Tuple
let jogadores: [string, string, string];
jogadores = ['Danilo', 'Pedro', 'Vitor'];

// Enum
enum StatusAprovacao {
    Aprovado = "001",
    Pendente = "002",
    Rejeitado = "003"
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaAPI: any[] = [123, 'Danilo', false];
const retornoDaAPI2: any = {
    // .......
};

// Void
function printarNaTela(msg: string): void {
    console.log(msg);
};

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
    // ...
};
criar({
    propriedade: 1,
});

// Never
function loopInfinito(): never {
    while (true) { }
};

function erro(mensagem: string): never {
    throw new Error(mensagem);
};

function falha(): never {
    return erro('Algo falhou');
};

// Union Types
const nota: string | number = 5;
function exibirNota(nota: number | string | boolean) {
    console.log(`A nota é ${nota}`);
};

exibirNota('10');

// Alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNacimento: Date;
};

// type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome: 'Danilo',
    sobrenome: "Freitas",
    dataNacimento: new Date()
}, {
    nome: 'Tiago',
    sobrenome: "Oliveira",
    dataNacimento: new Date()
}];
function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log('Nome do funcionario: ', funcionario.nome)
    }
};

// Valores nulos ou opcionais

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}

const contato: Contato = {
    nome: 'Vitor',
    telefone1: "123456"
}

// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString;

// const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);