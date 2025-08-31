/*
Dado um número n, use um loop para imprimir a tabuada desse número de 1 a 10.

Exemplo (para n = 3):

3 x 1 = 3
3 x 2 = 6
...
*/

function tabuada(n) {
    for (let i = 1; i <= 10; i++){
        const resultado = n * i;
        console.log(`${n} x ${i} = ${resultado}`);
    }
}

tabuada(3);