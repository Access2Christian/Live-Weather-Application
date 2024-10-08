function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");
  
    timeElement.innerHTML = formatDate(date);
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
  
    getForecast(response.data.city);
  }
  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${day} ${hours}:${minutes}`;
  }
  function searchCity(city) {
    let apiKey = "438ef4abe978ad5a029db4f3900o6f4t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeather);
  }
  function handleSearchInput(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input-form");
    searchCity(searchInput.value);
  }
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    return days[date.getDay()];
  }
  function getForecast(city) {
    let apiKey = "438ef4abe978ad5a029db4f3900o6f4t";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  
    axios(apiUrl).then(displayForecast);
  }
  
  function displayForecast(response) {
    console.log(response.data);
  
    let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
    let forecastHtml = "";
  
    response.data.daily.forEach(function (day, index) {
      if (index < 5) {
        forecastHtml =
          forecastHtml +
          `<div class="weather-forecast-day">
            <div class="weather-forecast-date">${formatDay(day.time)}</div>
            <div class="weather-forecast-icon">
              <img
                src="${day.condition.icon_url}" class="weather-forecast-icon"
              />
            </div>
            <div class="weather-forecast-temperatures">
              <div class="forecast-temperature-max">
                <strong>${Math.round(day.temperature.maximum)}&deg;</strong></div>
              
              <div class="forecast-temperature-min">${Math.round(
                day.temperature.minimum
              )}&deg;</div>
              </div>
            </div>`;
      }
    });
    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHtml;
  }
  let searchedData = document.querySelector("#search-form");
  searchedData.addEventListener("submit", handleSearchInput);
  searchCity("Durban");
  displayForecast();
  