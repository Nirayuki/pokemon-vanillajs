const pokemonList = [
  // Generation 1
  { name: "Bulbasaur", type: ["Grass", "Poison"], generation: 1 },
  { name: "Charmander", type: ["Fire"], generation: 1 },
  { name: "Squirtle", type: ["Water"], generation: 1 },
  { name: "Pikachu", type: ["Electric"], generation: 1 },

  // Generation 2
  { name: "Chikorita", type: ["Grass"], generation: 2 },
  { name: "Cyndaquil", type: ["Fire"], generation: 2 },
  { name: "Totodile", type: ["Water"], generation: 2 },
  { name: "Mareep", type: ["Electric"], generation: 2 },

  // Generation 3
  { name: "Treecko", type: ["Grass"], generation: 3 },
  { name: "Torchic", type: ["Fire"], generation: 3 },
  { name: "Mudkip", type: ["Water"], generation: 3 },
  { name: "Electrike", type: ["Electric"], generation: 3 },
];

const list = document.getElementById("list");

function GenerateList(){
  pokemonList.map((index, item) => {
    list
  })
}
