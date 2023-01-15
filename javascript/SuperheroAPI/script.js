const SUPERHERO_TOKEN = '5714365468647997'
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const randomHeroBtn = document.getElementById('random-hero-btn')
const heroImageDiv = document.getElementById('heroImage')
const searchButton = document.getElementById('search-btn')
const searchInput = document.getElementById('searchInput')

const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️',
  power: '📊',
  combat: '⚔️'
}

randomHeroBtn.onclick = () => randomHero()
searchButton.onclick  = () => searchHero()

const getSuperHeroByID = (id) => {

  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => { renderHero(json) })
}
const getSuperHeroByName = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then (json => {
      const hero = json.results[0]
      renderHero(hero)
    })
}
const renderHero = (hero) => {
  const name = `<h2>${hero.name}<h2>`
  const img = `<img src='${hero.image.url}' height=200 width=200/>`
  let stats = Object.keys(hero.powerstats)
  
  stats = stats.map(stat => {
    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${hero.powerstats[stat]}</p>`
  }).join('')

  heroImageDiv.innerHTML = `${name}${img}${stats}`
  
}

const randomHero = () => {
  const randNum = Math.floor(Math.random() * 731) + 1
  getSuperHeroByID(randNum)
}
const searchHero = () => {
  let name = searchInput.value
  getSuperHeroByName(name)
}





// heroBtn.addEventListener("click", function () {
//   let hero = prompt("Enter a hero id")
//   getSuperHero(hero)
// })
