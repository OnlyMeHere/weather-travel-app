




var cityQstEl = "";



// var cityQstEl = document.getElementById("#cityQst").value;
var startBtn = document.querySelector("button").addEventListener("click", validateClick);

cityQstEl = "London"; 







function validateClick(event) {
    event.preventDefault()
    console.log("click");

    // var cityQstEl = "";
    // 

    // --- user input is validated here
    var reqUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + 
    cityQstEl + `&appid=f1854a42b65c3a76fa9e1197b0e5cd1d&units=imperial`;
    


    // city search returns current and future weather


    fetch(reqUrl)
    // --- calls out to the API for data
     .then(function(response) {
        console.log("response", response)
        return response.json();
        // ---receives the data and parses it from a string to and object
     })
     .then(function (data) {
        console.log("data", data)
        // ----receives the object and passes it to be rendered on the page
        console.log("Map Keys: " + Object.keys(data));
        console.log("latitude = "+ data.coord.lat);
        console.log("longitude = "+ data.coord.lon);
        console.log("location = "+ data.name);
        console.log("temperature = " + data.main.temp);
        console.log("wind Speed = " + data.wind.speed);
        console.log("humidity = " + data.main.humidity);

        
        var temperture0 = data.main.temp;
        var wind0 = data.wind.speed;
        var humdity0 = data.main.humidity;


        // ----builds current Weather in city window

        document.innerHTML = temperture0 ;
        document.innerHTML = wind0;
        document.innerHTML = humdity0;




        //  ---builds 5-day forecast of that city


        // ---stores selected city in localStorage


    });

};
// that city is then added to search history

// that city's name, the date, an icon of weather conditions
// temperature, humdity, wind speed, UV index.

// the UV index is color coded: favorable/moderate/severe


// future conditions are presented as 5 day forcast that
// displayed with an icon representation of conditions, 
// temperature, wind speed and humidity



// clicking on the city in search history diplays the
// current weather and 5 day forecast for that city