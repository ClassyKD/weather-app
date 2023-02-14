// let requestUrl = `http://api.openweathermap.org/data/2.5/forecast?q=whittier&units=imperial&appid=3b3fd69f669a54cc39cd87683fb4d331`

let generateBtn = document.querySelector(".generatebtn");
let cities = JSON.parse(localStorage.getItem('cities')) || [];
let cityBtns = document.querySelector('.city-Btns');

//on start pull from local and append to page
function init() {
    let savedCities = JSON.parse(localStorage.getItem('cities'));
    if (savedCities.length) {
        populateCities(savedCities)
    }
}


//gets name on search click
function getName(event) {
    event.preventDefault();
    let searchName = document.querySelector('.generate').value;
    document.getElementById("generate").value = "";
    let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchName}&units=imperial&appid=3b3fd69f669a54cc39cd87683fb4d331`
    getAPI(requestUrl)
    saveCity(searchName)
}

//keep this will be the primary api call function
function getAPI(requestUrl) {
    fetch(requestUrl)
    .then(function (response){
        return response.json();
        
    })
    
    .then(function (data) {
        console.log(data)



    //current weather (0)
    let cityName = data.city.name
    console.log(cityName)
    let currentTemp = data.list[0].main.temp
    console.log(currentTemp)
    let currentWSpeed = data.list[0].wind.speed
    console.log(currentWSpeed)
    let currentHumidity = data.list[0].main.humidity
    console.log(currentHumidity)
    let currentIcon = data.list[0].weather[0].icon
    console.log(currentIcon)
    let currentTime = data.list[0].dt_txt


    //weather day 1 (7)
    let oneTemp = data.list[7].main.temp
    console.log(oneTemp)
    let oneWSpeed = data.list[7].wind.speed
    console.log(oneWSpeed)
    let oneHumidity = data.list[7].main.humidity
    console.log(oneHumidity)
    let oneIcon = data.list[7].weather[0].icon
    let oneTime = data.list[7].dt_txt

    //weather day 2 (15)
    let twoTemp = data.list[15].main.temp
    console.log(twoTemp)
    let twoWSpeed = data.list[15].wind.speed
    console.log(twoWSpeed)
    let twoHumidity = data.list[15].main.humidity
    console.log(twoHumidity)
    let twoIcon = data.list[15].weather[0].icon
    let twoTime = data.list[15].dt_txt

    //weather day 3 (23)
    let threeTemp = data.list[23].main.temp
    console.log(threeTemp)
    let threeWSpeed = data.list[23].wind.speed
    console.log(threeWSpeed)
    let threeHumidity = data.list[23].main.humidity
    console.log(threeHumidity)
    let threeIcon = data.list[23].weather[0].icon
    let threeTime = data.list[23].dt_txt

    //weather day 4 (31)
    let fourTemp = data.list[31].main.temp
    console.log(fourTemp)
    let fourWSpeed = data.list[31].wind.speed
    console.log(fourWSpeed)
    let fourHumidity = data.list[31].main.humidity
    console.log(fourHumidity)
    let fourIcon = data.list[31].weather[0].icon
    let fourTime = data.list[31].dt_txt

    //weather day 5 (39)
    let fiveTemp = data.list[39].main.temp
    console.log(fiveTemp)
    let fiveWSpeed = data.list[39].wind.speed
    console.log(fiveWSpeed)
    let fiveHumidity = data.list[39].main.humidity
    console.log(fiveHumidity)
    let fiveIcon = data.list[39].weather[0].icon
    let fiveTime = data.list[39].dt_txt

    //appends current and 5 day
    let html = `
    <div class="big-card row">
    <img src="http://openweathermap.org/img/wn/${currentIcon}@2x.png" class="card-img-top icon" alt="icon">
    <div class="card-body">
      <h5 class="card-title">${cityName} Weather</h5>
      <p class="card-text">Tempurature: ${currentTemp}°F</p>
      <p class="card-text">Wind Speed: ${currentWSpeed} MPH </p>
      <p class="card-text">Huminity: ${currentHumidity}%</p>
    </div>
    </div>
    </section>
    <section class="five-day flex">
    <div class="day-card">
    <img src="http://openweathermap.org/img/wn/${oneIcon}@2x.png" class="card-img-top icon" alt="icon">
    <div class="card-body">
    <h5 class="card-title">${oneTime}</h5>
    <p class="card-text">Tempurature: ${oneTemp}°F</p>
    <p class="card-text">Wind Speed: ${oneWSpeed} MPH </p>
    <p class="card-text">Huminity: ${oneHumidity}%</p>
    </div>
    </div>
    <div class="day-card">
    <img src="http://openweathermap.org/img/wn/${twoIcon}@2x.png" class="card-img-top icon" alt="icon">
    <div class="card-body">
    <h5 class="card-title">${twoTime}</h5>
    <p class="card-text">Tempurature: ${twoTemp}°F</p>
    <p class="card-text">Wind Speed: ${twoWSpeed} MPH </p>
    <p class="card-text">Huminity: ${twoHumidity}%</p>
    </div>
    </div>
    <div class="day-card">
    <img src="http://openweathermap.org/img/wn/${threeIcon}@2x.png" class="card-img-top icon" alt="icon">
    <div class="card-body">
    <h5 class="card-title">${threeTime}</h5>
    <p class="card-text">Tempurature: ${threeTemp}°F</p>
    <p class="card-text">Wind Speed: ${threeWSpeed} MPH </p>
    <p class="card-text">Huminity: ${threeHumidity}%</p>
    </div>
    </div>
    <div class="day-card">
    <img src="http://openweathermap.org/img/wn/${fourIcon}@2x.png" class="card-img-top icon" alt="icon">
    <div class="card-body">
    <h5 class="card-title">${fourTime}</h5>
    <p class="card-text">Tempurature: ${fourTemp}°F</p>
    <p class="card-text">Wind Speed: ${fourWSpeed} MPH </p>
    <p class="card-text">Huminity: ${fourHumidity}%</p>
    </div>
    </div>
    <div class="day-card">
    <img src="http://openweathermap.org/img/wn/${fiveIcon}@2x.png" class="card-img-top icon" alt="icon">
    <div class="card-body">
    <h5 class="card-title">${fiveTime}</h5>
    <p class="card-text">Tempurature: ${fiveTemp}°F</p>
    <p class="card-text">Wind Speed: ${fiveWSpeed} MPH</p>
    <p class="card-text">Huminity: ${fiveHumidity}%</p>
    </div>
    </div>
    </div>
    `

    $(".current-weather").html(html)

    });
    return
};

function saveCity(searchName) {
    if (!cities.includes(searchName)) {
        cities.push(searchName);
    }
    localStorage.setItem('cities', JSON.stringify(cities));
    populateCities(cities);
}

function populateCities(cities) {
    cityBtns.innerHTML = '';
    cities.forEach(city => {
        let button = document.createElement('button');
        cityBtns.append(button)
        button.setAttribute('class', 'btn btn-outline-secoundary btn-block');
        button.setAttribute('data-city', city);

        button.innerHTML = city
    })
}
generateBtn.addEventListener('click', getName);
cityBtns.addEventListener('click', () => getName);
init();
