var Animais = function(genero1, classe1, ordem1, habitat1) {
    return {
        constructor: Animais,
        genero: genero1,
        classe: classe1,
        ordem: ordem1,
        habitat: habitat1,
        getGenero: function() {
            return this.genero;
        },
        getClasse: function() {
            return this.classe;
        },
        getOrdem: function() {
            return this.ordem;
        },
        getHabitat: function() {
            return this.habitat;
        }
    };
    
};

var Mamiferos = Animais("Macho", "Mamíferos", "Carnivoros", "Terrestre" );
var Peixes = Animais("Macho", "Peixes", "Carnívoros", "Aquático");
var Aves = Animais("Macho", "Aves", "Carnívoros", "Aéreo");

var Tubarao = Object.create(Peixes, {
    mar: true,
    locomoverSe: function() {
        console.log("Nadando");
    },
    alimentarSe: function() {
        console.log("Carne");
    }
});

var Gaviao = Object.create(Aves, {
    migratoria: true,
    locomoverSe: function() {
        console.log("Voando");
    },
    alimentarSe: function() {
        console.log("Carne");
    }
});


var Urso = Object.create(Mamiferos, {
    cetaceo: true,
    locomoverSe: function() {
        console.log("Andando");
    },
    alimentarSe: function() {
        console.log("Carne");
    }
});
