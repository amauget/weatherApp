const {unitData} = require("./metricImperial");
const {populateCurrent} = require('./current');
const {populateForecast} = require('./forecast');
function init(){
  let unit = 'metric'
  let search = 'Honolulu';

  /* These are the default values on page load. */

  let data = sendOutData(unit, search) /* will return single object with all needed information */
  
  const submit = document.querySelector('.submit');
  submit.addEventListener('click', () =>{
    search = document.querySelector('.search').value;
    data = sendOutData(unit, search)

    })
  
  
  const imperial = document.querySelector('.imperial');
  const metric = document.querySelector('.metric');

  imperial.addEventListener('click', () =>{
    unit = 'imperial'
    imperial.style.background = 'black'
    metric.style.background = 'none';
    data = sendOutData(unit, search)
  })


  
  metric.addEventListener('click', () =>{
    unit = 'metric';
    imperial.style.background = 'none'
    metric.style.background = 'black';
    data = sendOutData(unit, search)
  })
}

async function sendOutData(unit, search){ /* removed from init() to allow "await" for even listeners */
  const data = await unitData(unit, search)

  const current = data.current

  populateCurrent(current)

  const forecast = data.forecast

  populateForecast(forecast);
}
   

init();
console.trace();