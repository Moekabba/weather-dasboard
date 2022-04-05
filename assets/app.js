// my Api key to be use
var myApi = "ecdc2e3e10911d9dd68cf81fb00dced1";
// api with uv but can't accept q as location
// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude&exclude=hourly,minutely,alerts&appid=ecdc2e3e10911d9dd68cf81fb00dced1
// Dom Elements
var searchButton = document.getElementById("search-btn");
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
function getApi() {
  searchHistory.innerHTML = " ";
  // console.log("HELLO");
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=senegal&cnt=5&units=metric&appid=ecdc2e3e10911d9dd68cf81fb00dced1";

  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      cityEl.textContent = " Weather in  " + data.name;
      console.log(data);
      tempEl.textContent = data.main.temp + " °C";
      iconEl.src = "http://openweathermap.org/img/wn/03n@2x.png";
      discEl.textContent = data.weather[0].description;
      humidEl.textContent = "humidity is: % " + data.main.humidity;
      windEl.textContent = "wind speed of " + data.wind.speed + " km/h";
      timeEl.textContent = "time zone: " + data.timezone;
      return data;

      //  uviEl.innerHTML =
      // console.log(data);
      // creating list of search histry
      // for (var i = 0; i < data.length; i++) {
      //   // Create a list element
      //   var historyList = document.createElement("li");

      //   // Set the text of the list element to the JSON response's .html_url property
      //   // historyList.textContent = data[data].city;

      //   // Append the li element to the id associated with the ul element.
      //   searchHistory.appendChild(historyList);
      // }
    });
  function searchInput() {
    this.getApi(searchButton.value);
  }
}
// search: function () {
//   this.fetchWeather(document.querySelector(".search-bar").value);
// }

searchButton.addEventListener("click", getApi);
