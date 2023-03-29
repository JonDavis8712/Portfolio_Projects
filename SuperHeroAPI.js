// https://superheroapi.com/api/3382114452106328/id



const SUPERHERO_TOKEN = '3382114452106328'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const newherobutton = 
document.getElementById('newhero')

const heroImageDiv = document.getElementById('heroImage')

const searchButton = document.getElementById('SearchButton')

const searchInput = document.getElementById('searchInput')

const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.powerstats)
        const superHero = json
        showHeroInfo(superHero)
    })
}

const showHeroInfo = (character) => {
    const name =`<h2>${character.name}</h2>`

    const img =`<img src="${character.image.url}" height=300 width=300/>`

  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`

   }).join('')



   heroImageDiv.innerHTML = `${name}${img}${stats}`
}

const getSearchSuperHero = (name) => {
    console.log(searchInput.value);
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.powerstats)
        const superHero = json.results[0]
        showHeroInfo(superHero)
    })
}

const randomHero = () => {
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) + 1
}


newherobutton.onclick = () => getSuperHero(randomHero(), clearSearch())

searchButton.onclick = () => getSearchSuperHero(searchInput.value)

let input = document.getElementById("searchInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchButton.click();
    }
});

clearSearch = () => {
    document.getElementById("searchInput").value = ''
}