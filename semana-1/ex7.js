/*
Dado um array de números, escreva uma função que retorne o maior número do array.
Exemplo: [3, 7, 2, 9] → retorna 9.
*/

function maiorNum(num) {
    return Math.max(...num);
}

const array = [5,3,4,7,11,2,9];
const maiorNumero = maiorNum(array);
console.log(maiorNumero);