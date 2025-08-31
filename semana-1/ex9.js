/*
Dada a string "FLAG{aprendendo_js}", escreva um programa que:

Imprima a string toda em maiúsculas.

Verifique se contém "js".

Mostre apenas a palavra "aprendendo".
*/

let str = 'FLAG{aprendendo_js}';

console.log(str.toUpperCase());
console.log(str.includes('js'));
console.log(str.slice(5, 15));