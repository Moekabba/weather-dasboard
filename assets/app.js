// my Api key to be use
var myApiKey = "ecdc2e3e10911d9dd68cf81fb00dced1";
var lat = 51.5073219;
var lot = -0.1276474;
// api with uv but can't accept q as location
// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude&exclude=hourly,minutely,alerts&appid=ecdc2e3e10911d9dd68cf81fb00dced1
// Dom Elements
var searchButton = document.getElementById("search-btn");
var formEl = document.getElementById("form");
var cityInputEL = document.getElementById("input");
var searchHistory = document.querySelector("ul");
var cityEl = document.getElementById("city");
var tempEl = document.getElementById("temp");
var iconEl = document.getElementById("icon");
var discEl = document.getElementById("description");
var humidEl = document.getElementById("humidity");
var windEl = document.getElementById("wind");
var uviEl = document.getElementById("UV");
var timeEl = document.getElementById("time");
// current day usiing moment.js (find a way to connect with search input so you can see different cities time)
var today = moment();
$("#currentDay").text(today);
// -------
//api.openweathermap.org/data/2.5/onecall?q=london&exclude=ecdc2e3e10911d9dd68cf81fb00dced1
// get/ calling Api function
// http: https:
function getApi(name) {
  // searchHistory.innerHTML = " ";
  // console.log("HELLO");
  var requestUrl =
    // " https://api.openweathermap.org/data/2.5/onecall?lat=51.5073219&lon=-0.1276474&units=metric&exclude=minutely,hourly&appid=ecdc2e3e10911d9dd68cf81fb00dced1";

    "https://api.openweathermap.org/data/2.5/weather?q=" +
    name +
    "&units=metric&appid=ecdc2e3e10911d9dd68cf81fb00dced1";

  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      // I want to use an HTTP request's response to display data to the user.

      cityEl.textContent = " Weather in  " + data.name;
      tempEl.textContent = data.main.temp + " °C";
      iconEl.src = "http://openweathermap.org/img/wn/03n@2x.png";
      discEl.textContent = data.weather[0].description;
      humidEl.textContent = "humidity is: % " + data.main.humidity;
      windEl.textContent = "wind speed of " + data.wind.speed + " km/h";
      timeEl.textContent = "time zone: " + data.timezone;
      //  uviEl.innerHTML =

      return data;
    });
}

//  I want to collect user input to form HTTP requests.
var formSubmitHandler = function (event) {
  event.preventDefault();
  var cityname = cityInputEL.value.trim();
  if (cityname) {
    getApi(cityname);
    cityInputEL.value = "";
  } else {
    alert("Please enter a city name");
    console.log(event);
  }
};

formEl.addEventListener("submit", formSubmitHandler);
