let titleP = document.querySelector('#star-wars-movie');


let randomMovieId = Math.floor(Math.random() * 6 + 1)


axios.get(`https://swapi.dev/api/films/${randomMovieId}/`)
.then((response) => {
    titleP.innerHTML = response.data.title

}).catch (() => {
    titleP.innerHTML = "failed"// if the .then function runs failing it will run the .catch function
    //example if server is down .catch can inform the user that the website is down or something along those lines
})

titleP.innerHTML = 'Solo'