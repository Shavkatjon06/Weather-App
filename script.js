let cityName = document.querySelector('.city');
let temperature = document.querySelector('.temp');
let status = document.querySelector('.info');
let searchBox = document.querySelector('.search input');
let searchButton = document.querySelector('.search button');
let weatherImage = document.querySelector('.weather img');
let displayBody = document.querySelector('.weather');

async function checkWeather(city) {
    // fetching data from api
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=ad694f3f6cfc6aae093e24b31b28d18e`);
    let data = await response.json();

    // changing inner values
    temperature.innerHTML = Math.round(data.main.temp) + '°C';
    cityName.innerHTML = data.name;
    status.innerHTML = data.weather[0].main;

    // changing image according to weather status
    if (data.weather[0].main == 'Clouds') {
        weatherImage.src = 'images/clouds.png';
    } else if (data.weather[0].main == 'Clear') {
        weatherImage.src = 'images/clear.png';
    } else if (data.weather[0].main == 'Rain') {
        weatherImage.src = 'images/rain.png'
    } else if (data.weather[0].main == 'Drizzle') {
        weatherImage.src = 'images/drizzle.png';
    } else if (data.weather[0].main == 'Mist') {
        weatherImage.src = 'images/mist.png'
    } else if (data.weather[0].main == 'Snow') {
        weatherImage.src = 'images/snow.png'
    }

    // displaying the weather body
    displayBody.style.display = 'block';
}
// running the function on Search button
searchButton.addEventListener('click', () => {checkWeather(searchBox.value);});
// enabling the function to work on Enter press
searchBox.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
