const {createTextElement} = require('./createTextElement');

function populateCurrent(data){
  let container = document.querySelector('.currentContainer');
  container.innerHTML = ''; /* wipe clean for each execution */

  let temp = createTextElement('currentTemp', data.temp);

  let icon = document.createElement('img');
  icon.className = 'currentIcon';
  icon.src = data.icon;

  let description = createTextElement('currentDescription', data.description);

  let area = createTextElement('area', `${data.city}, ${data.region}`);

  let highLow = createTextElement('currentHighLow', data.high + '/' + data.low)

  container.append(temp, icon, description, area, highLow);
}
/*
  "CURRENT" KEYS:
    city
    region
    temp
    humidity
    description (describes current conditions)
    icon
    high
    low
    feelsLike
*/
module.exports = {
  populateCurrent
}