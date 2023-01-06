// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
//Another way is to do: const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
//then in the loop: newImg.src = `${baseUrl}${i}.png`

for(let i = 1; i <= 151; i++){
const pokemonDiv = document.createElement("div");
pokemonDiv.classList.add("pokemon");
const labelSpan = document.createElement("span");
labelSpan.innerText = `#${i}`;
const newImg = document.createElement("img");
newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`


pokemonDiv.append(newImg);
pokemonDiv.append(labelSpan)
container.append(pokemonDiv);
};