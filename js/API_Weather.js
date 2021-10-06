// API : https://openweathermap.org/api

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";
//trouver new API : daily forecast data 
const API_URL_DAY3 = "http://api.openweathermap.org/data/2.5/forecast/daily";
//api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}

class API_WEATHER{
  constructor(city,cnt){
    // Si la ville n'est pas définit alors la ville par défault est Paris
    if(city === null){
      city = "paris";
    }
    this.city = city;
    cnt = 4;
  }

  // Faire la requete à l'API openweathermap pour aller chercher les données
  // Retourne une promise
  //globalement pareil 
  fetchTodayForecast(){
    return axios//faire des get
    .get(`${API_URL}?q=${this.city}&units=metric&appid=${API_KEY}`, {
      crossdomain: true
    })
  }
  fetchThreeDayForecast(){
    return axios
    .get(`${API_URL_DAY3}?q=${this.city}&cnt=4&appid=${API_KEY}`, {
      crossdomain: true
    })
  }
  // Retourne l'element HTML de l'icon symbolisant la méteo.
  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }
}