var numeros = prompt("Diga os números que deseja analisar separando os por vírgula sem espaço (ex: 5,6,7): ");
var array = numeros.split(","); //separa os numeros em strings em um objeto array
var arrayNumeros = parseInt(array);
console.log(arrayNumeros);

arrayNumeros.sort(function(n1, n2){ //ordena em ordem crescente
    if(n1 > n2){
        return 1; //espécie de "true"
    } else {
        return -1; //espécie de "false"
    }
});

var textoCrescente = `Os seus números em ordem crescente: ${arrayNumeros}`; //injeção de variável
console.log(textoCrescente);

arrayNumeros.sort(function(n1, n2){ //ordena em ordem decrescente
    if(n1 < n2){
        return 1; //espécie de "true"
    } else {
        return -1; //espécie de "false"
    }
});

var textoDecrescente = `Os seus números em ordem decrescente: ${arrayNumeros}`; //injeção de variável
console.log(textoDecrescente);

var menor = Math.min(arrayNumeros);
var maior = Math.max(arrayNumeros);

var menorNumero = `O maior dos seus número é ${maior}`;
var maiorNumero = `O menor dos seus números é ${menor}`;

console.log(menorNumero);
console.log(maiorNumero);