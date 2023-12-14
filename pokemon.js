let pokemonOutput = document.querySelector("#pokemon-list")
let pokemonButton = document.querySelector('#get-pokemon')
let numInput = document.querySelector("#num-pokemon")
///promise chaining------------------------------ or .then 

pokemonButton.addEventListener("click", () => {
    let num = numInput.value

    pokemonOutput.innerHTML = ''

    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${num}`)
    .then ((response) => {
      let pokemon = response.data.results
      console.log(response.data.results)
      for ( let i=0; i < pokemon.length; i ++){
        let pokeObj = pokemon[i]

        let newListItem = document.createElement('li')
        newListItem.innerText = pokeObj.name

        pokemonOutput.appendChild(newListItem)
      }

})

})