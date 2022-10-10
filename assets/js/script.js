

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
            // ---receives the data and parses it from a string to an object
         })
         .then(function (data) {
            console.log("data", data)

            // --new Date() grabs the current date and time

        function timeStamp() {
            let date = new Date();
            // let cDay = date.getDay();
            let cDate = date.getDate();
            let cMonth = date.getMonth();
            let cYear = date.getFullYear();

            return `${cMonth+1} / ${cDate} / ${cYear}`
        };


            // ----receives the current day data and renders it to the page
            
            var currentDayCard = document.getElementById("currentDay");
            var currentDayDate = document.createElement("h3");
            currentDayDate.textContent = timeStamp();
            currentDayCard.appendChild(currentDayDate);
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
                function futureDate() {
                let date = new Date() 
                date.setDate(date.getDate() + i)
                let fDate = date.getDate();
                let fMonth = date.getMonth();
                let fYear = date.getFullYear();
                return `${fMonth+1} / ${fDate} / ${fYear}`
                };
                let futureDayDiv = document.getElementById("futureDay");
                let futureDayCard = document.createElement("div");
                futureDayDiv.appendChild(futureDayCard);
                futureDayCard.setAttribute("class", "card");
                let futureDayBody = document.createElement("div");
                futureDayCard.appendChild(futureDayBody);
                futureDayBody.setAttribute("class", "card-body");
                let futureDayHeading = document.createElement("h5");
                futureDayHeading.setAttribute("class", "card-title");
                futureDayHeading.textContent = futureDate();
                futureDayBody.appendChild(futureDayHeading);
                let futureDayTemp = document.createElement("h5");
                futureDayTemp.setAttribute("class", "card-text");
                futureDayTemp.textContent = "Temp: " + data.daily[i].feels_like.day + " F";
                futureDayBody.appendChild(futureDayTemp);
                let futureDayWind = document.createElement("h5");
                futureDayWind.setAttribute("class", "card-text");
                futureDayWind.textContent = "Wind Speed: " + data.daily[i].wind_speed + "mph";
                futureDayBody.appendChild(futureDayWind);
                let futureDayHumidity = document.createElement("h5");
                futureDayHumidity.setAttribute("class", "card-text");
                futureDayHumidity.textContent = "Humidity: " + data.daily[i].humidity + " %";
                futureDayBody.appendChild(futureDayHumidity);
                let futureDayUvInex = document.createElement("h5");
                futureDayUvInex.setAttribute("class", "card-text")
                futureDayUvInex.textContent = "UV Index: " + data.daily[i].uvi;
                futureDayBody.appendChild(futureDayUvInex);


            };
        
            // ----- below puts this current day data into local storage for retreaval from search history dropdown. 

            // const searchOne {
            // 
            // cityName: userInputEl
            // 
            // }
            // 




        });



    });










    






};

















    // function cityLookUp(cityInfo) {
    
    // console.log(cityInfo);

    // var cityQstEl = "";

    // --- The one that doesn't have 5 day forecast
    // var reqUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + 
    // cityInfo + `&appid=f1854a42b65c3a76fa9e1197b0e5cd1d&units=imperial`;
   