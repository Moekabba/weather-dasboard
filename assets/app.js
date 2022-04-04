var myApi = "ecdc2e3e10911d9dd68cf81fb00dced1";
// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
//api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

var searchButton = document.getElementById("search-btn");
var searchHistory = document.querySelector("ul");

// I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// current day usiing moment.js
var today = moment();
$("#currentDay").text(today);
// get/ calling Api function
function getAPi(city) {
  searchHistory.innerHTML = " ";

  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=london&cnt=5&units=metric&appid=ecdc2e3e10911d9dd68cf81fb00dced1";
  // "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
  // city +
  // "&cnt=5&units=metric&appid=" +
  // this.apiKey;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // creating list of search histry
      for (var i = 0; i < data.length; i++) {
        // Create a list element
        var historyList = document.createElement("li");

        // Set the text of the list element to the JSON response's .html_url property
        historyList.textContent = data[i].city;

        // Append the li element to the id associated with the ul element.
        searchHistory.appendChild(historyList);
      }
    });
}

searchButton.addEventListener("click", getAPi);
