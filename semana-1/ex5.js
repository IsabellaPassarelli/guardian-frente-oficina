/*
Crie um array com números de 1 a 20.
Mostre no console apenas os números pares.
*/

const num = [];
for (let i = 1; i <= 20; i++) {
    num.push(i);
}

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        console.log(num[i]);
        
    }
}