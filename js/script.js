
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  var city = null;
  city= document.getElementById('city-input').value;
  
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    //.fetchTodayForecast()//tache lourde, recup toute les données : jouer avec ca 
    .fetchThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM = affichage
      document.getElementById('today-forecast-main').innerHTML = main;// "today"+i+""
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
