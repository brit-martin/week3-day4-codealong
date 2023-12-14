//-------using Async/Await-----------------------------------------




let pokemonOutput = document.querySelector("#pokemon-list")
let pokemonButton = document.querySelector('#get-pokemon')
let numInput = document.querySelector("#num-pokemon")


pokemonButton.addEventListener("click", async () => {// on line 16 we used await axios so we need to use async in front of the function
    let num = numInput.value

    pokemonOutput.innerHTML = ''
    
   let response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${num}`)
   
      let pokemon = response.data.results
    //   console.log(response.data.results)
      for ( let i=0; i < pokemon.length; i ++){
        let pokeObj = pokemon[i]

        let newListItem = document.createElement('li')
        newListItem.innerText = pokeObj.name

        pokemonOutput.appendChild(newListItem)
      }
})