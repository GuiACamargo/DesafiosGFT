var Medicamento = (function (nomeMedicamento1, valorMedicamento1, idadeCliente1) {
    var nomeMedicamento = nomeMedicamento1;
    var valorMedicamento = valorMedicamento1;
    var idadeCliente = idadeCliente1;
    
    var getNome = function() {
        return nomeMedicamento;
    };
    
    var getValor = function() {
        return valorMedicamento;
    };
    
    var getIdade = function() {
        return idadeCliente;
    };
    
    var setNome = function(valor) {
        nomeMedicamento = valor;
    };
    
    var setValor = function(valor) {
        valorMedicamento = valor;
    };
    
    var setIdade = function(valor) {
        idadeCliente = valor;
    };    
    
    var apresentarValorMedicamento = function() {
        return console.log("Olá");
    };

    return {
        getNome: getNome,
        getIdade: getIdade,
        getValor: getValor,
        setIdade: setIdade,
        setNome: setNome,
        setValor: setValor,
        apresentarValorMedicamento: apresentarValorMedicamento
    };
})("Tylenol", 50, 0);

Medicamento.setIdade(81); //Escolhe a idade do indivíduo
console.log("A sua idade é em anos: " + Medicamento.getIdade());

//Calcula o desconto baseado na idade
if (Medicamento.getIdade() >= 60 && Medicamento.getIdade() <= 70) {
    var desconto1 = Medicamento.getValor() - (Medicamento.getValor() * 0.2);
    
    Medicamento.setValor(desconto1);
}

if (Medicamento.getIdade() >= 71 && Medicamento.getIdade() <= 80) {
    var desconto2 = Medicamento.getValor() - (Medicamento.getValor() * 0.3);
    
    Medicamento.setValor(desconto2);
}

if (Medicamento.getIdade() > 80) {
    var desconto3 = Medicamento.getValor() - (Medicamento.getValor() * 0.5);
    
    Medicamento.setValor(desconto3);
}

console.log("Então o seu preço com desconto é: R$" + Medicamento.getValor());


