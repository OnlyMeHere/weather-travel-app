

var lat = 0;
var lon = 0;
var userInputEl = "";
var futureDate = [];
var currentDate = "";
var dayF1 = [];
var monthF1= [];
var yearF1= [];

var startBtn = document.getElementById("startBtn");

var userInputEl = document.getElementById("userInput");

// --new Date() grabs the current date and time from

function timeStamp() {

    currentDate = new Date();
    console.log("Current Date: ", currentDate);
    for(i = 0; i < 1; i++) {

        var futureDate = futureDate.push.dayF1[i] + currentDate[3].valueOf + 1;
        var futureDate = futureDate.push.monthF1[i] + currentDate[1].valueOf;
        var FutureDate = futureDate.push.yearF1[i] + currentDate[3].valueOf;
        console.log( "FutureDate" + monthF1 + dayF1 + yearF1 );
        
    }

}
timeStamp()

startBtn.addEventListener("click", function(event){
    event.preventDefault()
    cityLookUp(userInputEl.value);
    console.log("event"+event);
    console.log("userInputEl = " + userInputEl);

});
//  -- the function above waits for the text input to be entered
//  -- and the button clicked

function cityLookUp(userInputEl) {
    // -- calls the geo location API to get latitude and longitude of requested city to input those values in the second API below
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + userInputEl + "&limit=5&appid=f1854a42b65c3a76fa9e1197b0e5cd1d")
        .then(function(response) {
            console.log("Geo-Location = " + response);
            return response.json();
        })
         .then(function(geodata) {
            console.log("Geo Data = ", geodata);
            lat = geodata[0].lat;
            lon = geodata[0].lon;
            console.log("lat = " + lat);
            console.log("lon = " + lon);

        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon +"&units=imperial&appid=f1854a42b65c3a76fa9e1197b0e5cd1d")
            // --- calls out to the API for weather data
         .then(function(response) {
            console.log("response", response)
            return response.json();
            // ---receives the data and parses it from a string to and object
         })
         .then(function (data) {
            console.log("data", data)

            // ----receives the current day data and renders it to the page
            
            var currentDayCard = document.getElementById("currentDay");
            var currentDayHeading = document.createElement("h3");
            currentDayHeading.textContent = userInputEl;
            currentDayCard.appendChild(currentDayHeading);
            var currentDayTemp = document.createElement("h5");
            currentDayTemp.textContent = "Temp: " + data.current.temp + " F";
            currentDayCard.appendChild(currentDayTemp);
            var currentDayWind = document.createElement("h5");
            currentDayWind.textContent = "Wind Speed: " + data.current.wind_speed + "mph";
            currentDayCard.appendChild(currentDayWind);
            var currentDayHumidity = document.createElement("h5");
            currentDayHumidity.textContent = "Humidity: " + data.current.humidity + " %";
            currentDayCard.appendChild(currentDayHumidity);
            var currentDayUvInex = document.createElement("h5");
            currentDayUvInex.textContent = "UV Index: " + data.current.uvi;
            currentDayCard.appendChild(currentDayUvInex);

            // -- below renders the five day forecast to the page

            for (i = 1; i <= 6; i++) {

                var fiveDayCard = document.getElementById("fiveDay");
                var fiveDayHeading = document.createElement("h5");
                fiveDayHeading.textContent = futureDate;
                fiveDayCard.appendChild(cMonth + "/" + (cDay + i) + "/" + cYear);

            }
        
            // ----- below puts this current day data into local storage for retreaval from search history dropdown. 

            // const searchOne {
            // 
            // cityName: userInputEl
            // 
            // }
            // 




        });



    });










    






}

















    // function cityLookUp(cityInfo) {
    
    // console.log(cityInfo);

    // var cityQstEl = "";

    // --- The one that doesn't have 5 day forecast
    // var reqUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + 
    // cityInfo + `&appid=f1854a42b65c3a76fa9e1197b0e5cd1d&units=imperial`;
   


    // city search returns current and future weather


  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  

  


  
  
  
  


  





        //  ---builds 5-day forecast of that city


        // ---stores selected city in localStorage


   


// that city is then added to search history

// that city's name, the date, an icon of weather conditions
// temperature, humdity, wind speed, UV index.

// the UV index is color coded: favorable/moderate/severe


// future conditions are presented as 5 day forcast that
// displayed with an icon representation of conditions, 
// temperature, wind speed and humidity



// clicking on the city in search history diplays the
// current weather and 5 day forecast for that city