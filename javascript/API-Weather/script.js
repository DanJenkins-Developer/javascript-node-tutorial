/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/
const latitudeInput = document.getElementById("lat-input")
const longitudeInput = document.getElementById("long-input")
const cityNameEl = document.getElementById('city-name')
const WeatherTypeEl = document.getElementById('weather-type')
const temperatureEl = document.getElementById('temp')
const minTempEl = document.getElementById('min-temp')
const maxTempEl = document.getElementById('max-temp')


// API_KEY for maps api
let API_KEY = 'd890ec20e2mshd817a1896502d6cp110c17jsn0ce7b531690d';
const BASE_URL = 'https://dark-sky.p.rapidapi.com'


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
	}
}

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (latitude, longitude) => {
  //HINT: Use template literals to create a url with input and an API key

  fetch(`${BASE_URL}/${latitude},${longitude}?units=auto&lang=en`, options)
    .then(response => response.json())
    .then(response => renderWeatherData(response))
    .catch(err => console.error(err, "sugma"))

}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const longitude = longitudeInput.value
  const latitude = latitudeInput.value

  //const latitude = 30.595681
  // const longitude = -96.332516
  getWeatherData(latitude, longitude)
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const renderWeatherData = (weatherData) => {

  cityNameEl.innerHTML = `${weatherData.latitude}, ${weatherData.longitude}`
  WeatherTypeEl.innerHTML = `${weatherData.currently.summary}`
  temperatureEl.innerHTML = `${weatherData.currently.temperature}`
  minTempEl.innerHTML = `${weatherData.daily.data[0].apparentTemperatureMin}`
  maxTempEl.innerHTML = `${weatherData.daily.data[0].apparentTemperatureHigh}`

}
