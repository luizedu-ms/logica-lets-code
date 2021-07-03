//Vetores/Arrays
let vetor = [1,2,3,4,5,6,7,8,9,10];

let vetor2 = [];
vetor2[0] = 'teste';
vetor2[1] = 'teste2';

vetor3['indice1'] = 'teste';
vetor3['indice2'] = 'teste2';

let vetor4 = [1,2,3,'a','b','c',true,false];
let primeiro_elemento = vetor4[0];
let quinto_elemento = vetor4[4];

//Percorrendo o Vetor

let vetor5 = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < vetor5.length; i++){
    console.log(vetor5[i]);
}

//for-of
const vetor6 = [10,20,30,40,50];
for(let valor6 of vetor6){
    console.log(valor6);
}
//for-in
const vetor = [10,20,30,40,50];

for(let indice in vetor){
    console.log(indice, vetor[indice]);
}

//Vetores Dinâmicos
// Em JavaScript vetores são estruturas de dados dinâmicas, isto é, de tamanho variável. 

// Para adicionar um elemento ao final do vetor, faça:
let vetor = [10,20,30,40,50];
let novo_elemento = 60;
vetor.push(novo_elemento);

// Para remover do final:
let vetor = [10,20,30,40,50];
vetor.pop();

// Para adicionar ao começo:
let vetor = [10,20,30,40,50];
let novo_elemento = 0;
vetor.unshift(novo_elemento);

// Para remover do começo:
let vetor = [10,20,30,40,50];
vetor.shift();