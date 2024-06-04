function createTextElement(name, text){
  let element = document.createElement('p');
  element.className = name;
  element.textContent = text;
  return element;
}
module.exports = {
  createTextElement
}