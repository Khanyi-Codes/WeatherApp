function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;

    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.condition.description;

    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${response.data.temperature.humidity} %`;

    let windElement = document.querySelector("#wind");
    windElement.innerHTML = `${response.data.wind.speed} km/h`;


    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let minutes = date.getMinutes();

    if( minutes < 10){
        minutes = `0${minutes}`;
    }
    timeElement.innerHTML = `${day} ${date.getHours()}:${minutes}`;
    
    let iconElement = document.querySelector("#icon");

    iconElement.innerHTML = `<img src = "${response.data.condition.icon_url}" class = "weather-app-icon">`;
    
    getForecast(response.data.city);
  
}
function searchCity(city){
    let apiKey = "c64t23cdba0aa619b751fda43e0ao4bf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector(".search-form-input");
    
    searchCity(searchInput.value);}

function getForecast(city){
    let apiKey = "c64t23cdba0aa619b751fda43e0ao4bf";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);

}


// Forcast template
function displayForecast(){

    let forecastElement = document.querySelector("#forecast");
    let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
    let forecastHtml = ``;
    days.forEach(function(day){

    forecastHtml += `<div class = "weather-forecast-day">
                <div class = "weather-forecast-date">${day}</div>
                <div class = "weather-forecast-icon">🌧️</div>  
                <div class = "weather-forecast-temperatures">
                    <div class = "weather-forecast-temperature">
                    <strong>15°</strong></div> 
                    <div class= "weather-forecast-temperature">9° </div>
                    </div>
            </div>`;});

            forecastElement.innerHTML = forecastHtml;
            
}



let searchformElement = document.querySelector(".search-form");
searchformElement.addEventListener("submit", handleSearchSubmit);
searchCity("Johannesburg");





