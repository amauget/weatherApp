/* object "current will be sent here for populating.
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
  
  DOM Elements:
    current container - HTML
    temp - p
    icon - img
    description -p
    ${city, region} -p
    ${high}/${low} - p
    feelsLike - p 

*/
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


function createTextElement(name, text){
  let element = document.createElement('p');
  element.className = name;
  element.textContent = text;
  return element;
}

module.exports = {
  populateCurrent
}