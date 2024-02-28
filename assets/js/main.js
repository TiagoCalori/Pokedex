
const offset = 0
const limit = 10

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
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