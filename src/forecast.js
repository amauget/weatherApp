const{createTextElement} = require('./createTextElement')

function populateForecast(data){
  let container = document.querySelector('.forecastContainer')
  container.innerHTML = ''

  for(let i = 0; i < 10; i++){
    let dayContainer = document.createElement('div')
    dayContainer.className = 'dayContainer'
    
    let current = data[i]

    let date = createTextElement('.date', current.date) /* class name, text content */

    let icon = document.createElement('img')
    icon.src = current.icon

    let description = createTextElement('.description', current.description)
    
    let highLow = createTextElement('highLow', `${current.high} / ${current.low}`)

    let humidity = createTextElement('humidity', current.humidity)

    dayContainer.append(date, icon, description, highLow, humidity)
    container.appendChild(dayContainer)
  }
}
/*  
 "FORECAST" keys:
    date
    icon
    description
    high
    low
    humidity    
*/
module.exports = {
  populateForecast
}