// api: http://api.weatherapi.com/v1/forecast.json?key=ceda5598ead348a591752004242110&q=dhanbad&days=7&aqi=no&alerts=no

const btn = document.querySelector("#search")
const child2 = document.querySelector(".child2")
let allData = []

const weatherContainer = document.createElement("div")
const icon = document.createElement("img")
const weather = document.createElement("p")
const sunrise = document.createElement("span")
const sunset = document.createElement("span")
const date = document.createElement("span")
const dateAndTime = document.createElement("p")
const tempC = document.createElement("span")
const tempF = document.createElement("span")


btn.addEventListener("click",()=>{
  const cityname = document.querySelector("#cityName").value
  let obj = {}

  

  api(cityname).then((ele)=>{
    return ele.forecast.forecastday
  })
  .then((ele)=>{
    ele.forEach((ele)=>{
      obj["sunrise"] = ele.astro["sunrise"];
      obj["sunset"] = ele.astro["sunset"];
      obj["date"] = ele.date;
      obj["tempF"] = ele["day"].mintemp_f;
      obj["tempC"] = ele["day"].mintemp_c;
      obj["weather_condition"] = ele["day"]["condition"].text;
      obj["weather_icon"] = ele["day"]["condition"].icon;

      allData.push(ele)
      // sunrise.innerText = obj.sunrise;
      // sunset.innerText = obj.sunset;
      // date.innerText = obj.date;
      // tempC.innerText = obj.tempF;
      // tempF.innerText = obj.tempC;
      // weather.innerText = obj.weather_condition;
      // icon.innerText = obj.weather_icon;
    })
  })
  console.log(allData)
})









async function  api(cityname) {
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=ceda5598ead348a591752004242110&q=${cityname}&days=7&aqi=no&alerts=no`)
    const res = await data.json()
    return res
}

