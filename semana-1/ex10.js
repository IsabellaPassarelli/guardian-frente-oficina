/*
Dada a string JSON:

let dados = '{"user":"alice","flag":"GUARDIAN{JS0N_L3AK3D}"}';

Transforme em objeto JavaScript e mostre no console apenas o valor da flag.
*/

let dados = '{"user":"alice","flag":"GUARDIAN{JS0N_L3AK3D}"}';
let obj = JSON.parse(dados);
console.log(obj.flag);