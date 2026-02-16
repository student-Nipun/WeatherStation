function fetch_data() {
  let cityName = document.getElementById("city").value;
  if (cityName === "") {
    alert("Enter City Name");
    return;
  }
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=1bf98b80c6d8b429260e700608bfa0a6&units=metric";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let resp_code = data["cod"];
      if (resp_code == 404) {
        alert("City not found");
      } else if (resp_code == 401) {
        alert("Invalid API key");
      } else {
        let cityTemp = data.main.temp;
        console.log(cityTemp);
        let icon = data.weather[0].icon;
        let icon_url = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.getElementById("result").innerHTML =
          `<img src=${icon_url}>` +
          `<br>` +
          `<h3>Temperature is: ` +
          cityTemp +
          `&deg;C </h3>`;
      }
    });
}
