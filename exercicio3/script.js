// # Exercício 3

// Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:

// ```jsx
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
console.log(pokemon1)

// a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
const copiaPokemon1 = {...pokemon1, nome: "Squirtle", tipo: "Água"}
console.log(copiaPokemon1)

// b) No objeto original, adicione mais uma propriedade, chamada `ataques`.
//Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. 
//Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

// ```text
// nome: Investida;
// dano: 40;
// tipo: Normal;
// precisao: 100;
pokemon1.ataques = []
pokemon1.ataques.push( 
    {nome: "Investida", 
     dano: 40,
     tipo: "Normal",
     precisao: 100}
)
console.log(pokemon1)

// c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
copiaPokemon1.ataques = [...pokemon1.ataques]
console.log(copiaPokemon1)

// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;
pokemon1.ataques.push(
    {nome: "Folha de Navalha", 
     dano: 45,
     tipo: "Grama",
     precisao: 100}
)

// e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
copiaPokemon1.ataques.push(
    {nome: "Jato de Água", 
     dano: 40,
     tipo: "Água",
     precisao: 100}
)

// f) Imprima os dois objetos no console.
console.log(pokemon1)
console.log(copiaPokemon1)