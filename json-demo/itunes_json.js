import mountainSongs from "./mountain.json" assert { type: "json"}

//log the nane of the first track 
console.log(mountainSongs.results[0].trackName)


//log the entire object for the fifth track
console.log(mountainSongs.results[4])

//log the name of every artist 1 by 1 you should have 50 logs please dont make your code 50 lines long
for (let i = 0; i < mountainSongs.results.length; i ++){
    console.log(mountainSongs.results[i].artistName ) 
} 