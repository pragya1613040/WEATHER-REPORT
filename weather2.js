const API_KEY = `fb506cab15bfac0b7f4975acc2bd13f4`
const form = document.querySelector("form")
const search = document.querySelector("#search-input")
const weather = document.querySelector("main")
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
    
    <div id="temp">
   <img id="temp-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
   <p> <span id="temp-value">${data.main.temp}</span><span id="temp-unit">&#176c</span></p>
    </div>
    <div id="climate">
    <p>${data.weather[0].main} </p>
    </div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)