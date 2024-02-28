
const offset = 0
const limit = 10

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
//otimizando a escrita do código com arrow function
.then((response)=> response.json())
.then((jsonBody) => jsonBody.results)
.then((pokemonList)=> {
  debugger
  console.log(pokemonList)
    
} 
)
.catch((error)=> console.error(error))


/*
    .then(function (response) {
        return response.json()
    })
    .then(function (jsonBody) {
        console.log(jsonBody)
    })
    // caso fracase a requisição .catch
    .catch(function (error) {
        console.error(error)
    })
    // independente o resultado da requesico se for com sucesso ou fracasso
    .finally(function () {
        console.log('Requisição concluída!')
    })
    */