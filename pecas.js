let pesoPeca = 150
let numeroPecas = 9
let nomePeca = "Carburador"

if(pesoPeca >= 100) {
    console.log ("A peca pode ser cadastrada")
} else {
    console.log ("Erro, peso insuficiente")
}

if(numeroPecas >= 10) {
    console.log ("Impossivel cadastrar, numero de pecas excedido") 
} else {
    console.log ("Numero valido, o cadastro pode seguir adiante")
}

if (nomePeca.length < 3) {
    console.log ("Erro, nome invalido")
} else {
    console.log ("Nome valido")
}