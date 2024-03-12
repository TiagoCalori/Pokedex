
function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeslot) => ` <li class="type">${typeslot.type.name} </li>`)
}

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
    <span class="number">${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">   
        ${convertPokemonToLi(pokemon.types).join('')}
        </ol>

        <img src=${pokemon.sprites.other.dream_world.front_degault}"
        alt="${pokemon.name}">    
    </div>   
</li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml 
})

