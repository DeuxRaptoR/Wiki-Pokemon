const listaPokemon = document.querySelector("#listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <=600; i++){
    fetch(URL + i)
        .then((response)=> response.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke){

    let tipos = poke.types.map((type) =>`<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    let pokeId = poke.id.toString();
    if (pokeId.length === 1){
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="contenedor">
                <h2 class="nombre-pokemon">${poke.name}</h2>
            </div>
        </div>
        <div class="pokemon-tipo">
            ${tipos}
        </div>
    `;
    listaPokemon.append(div);
}





