function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
  
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
searchCity("Lisbon");