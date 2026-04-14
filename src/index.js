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
    if( date.getMinutes() < 10){
        date.setMinutes(`0${date.getMinutes()}`);
    }
    timeElement.innerHTML = `${day} ${date.getHours()}:${date.getMinutes()}`;

    
    

  
}
function searchCity(city){
    let apiKey = "c64t23cdba0aa619b751fda43e0ao4bf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector(".search-form-input");
    
    searchCity(searchInput.value);

}
let searchformElement = document.querySelector(".search-form");
searchformElement.addEventListener("submit", handleSearchSubmit);
searchCity("Johannesburg");