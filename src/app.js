// Importando o módulo readline-sync
import * as rl from 'readline-sync';

//Instrução
console.log("Digite pelo menos 2 propriedades do CSS.\nPara ordenar digite 'sair'\n")

//Criação do array e da variável
const props = []
let input

//Entrada do usuário e tratamento de erros
do {
    input = (rl.question('Digite a propriedade: ')).toLowerCase()
    let isValid = validaNumero(input) & validaString(input)
    //Guarda a entrada do usuário na lista
    if (isValid) {
        props.push(input)
    } else {
        console.log("Entrada inválida")
    }

} while (input != 'sair')


// Chamada da função que remove os números do array 
// removerNumeros()
// Chamada da função que remove os espaços vazios
// removerNulo()
// Remove o último item da lista (a palavra 'sair')
props.pop()
// Ordena as palavras em ordem alfabética crescente 
props.sort()
// Imprime os elementos em forma de lista
console.log("\nLISTA DOS ELEMENTOS ORDENADOS:")
props.forEach(function (element) {
    console.log(element)
})



// //Criação da função de excluir os espaços vazios 
// function removerNulo() {
//     var index = props.indexOf('')
//     while (index >= 0) {
//         props.splice(index, 1);
//         index = props.indexOf('')
//     }
// }

// // Criação da função que remove números
// function removerNumeros() {
//     let numeros = props.some((number) => {
//         return number >= 0;
//     })
//     while (numeros == true) {
//         const found = props.findIndex((number) => number >= 0)
//         props.splice(found, 1)
//         if (found == -1) {
//             break
//         }
//     }
// }



function validaNumero(input) {
    const inputInt = parseInt(input)
    return isNaN(input)
}

function validaString(input) {
    const str = input.trim()
    return str != ''
}
