export  async function unitData(unit, search){
  let loader = document.querySelector('.loader')
  loader.style.display= 'block'

  const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=6b2610dac8e14e62a52205458243105&q=${search}&days=10&aqi=yes&alerts=no`)
  const parsed = await data.json()

  console.log(parsed)

  const location = parsed.location
  const current = parsed.current
  const forecast = parsed.forecast

  let usedData = {};

  let currentTemp = undefined
  let currentHigh = undefined
  let currentLow = undefined
  let feelsLike = undefined

  if(unit === 'metric'){
    currentTemp =  current.temp_c + '°C'
    currentHigh = forecast.forecastday[0].day.maxtemp_c + '°C'
    currentLow = forecast.forecastday[0].day.mintemp_c + '°C'
    feelsLike = current.feelslike_c + '°C'
  }
  else{
    currentTemp =  current.temp_f + '°F'
    currentHigh = forecast.forecastday[0].day.maxtemp_f + '°F'
    currentLow = forecast.forecastday[0].day.mintemp_f + '°F'
    feelsLike = current.feelslike_f + '°F'
  }
 
  let surroundingArea = undefined
  if(location.country === "United States of America"){
    surroundingArea = location.region
  }
  else{
    surroundingArea = location.country
  }
  usedData = {
    current: {
      city: location.name, region: surroundingArea, temp: currentTemp, humidity: current.humidity, description: current.condition.text, icon: current.condition.icon, 
      high: currentHigh, low: currentLow, feelsLike: feelsLike
    },
    forecast: { /* Populated by for loop below */
      
    }
  }
  
  let daysOfWeek = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  for(let i = 0; i < 10; i++){
    let key = forecast.forecastday[i]

    let dateIndex = new Date(forecast.forecastday[i].date).getDay()
    let date = null
    if(i === 0){
      date = 'Today'
    
    }
    else{ 
      date = daysOfWeek[dateIndex]
    }
  
    let icon = key.day.condition.icon
    let description = key.day.condition.text

    let high = undefined
    let low = undefined

    if(unit === 'metric'){
      high = key.day.maxtemp_c + '°C'
      low = key.day.mintemp_c + '°C'
    }
    else{ /* implies 'imperial' */
      high = key.day.maxtemp_f + '°F'
      low = key.day.mintemp_f + '°F'
    }
 
    let humidity = key.avghumidity

    usedData.forecast[i] = {
      date: date, icon: icon, description: description, 
      high: high, low: low, humidity: humidity 
    }
  }
  return usedData
}
// module.exports = {
//   unitData
// }