const greenButton = document.getElementById('verde');
const redButton = document.getElementById('vermelho');
const blueButton = document.getElementById('azul');
const resetButton = document.getElementById('reset');
const mainDiv = document.getElementById('main-div');

greenButton.addEventListener('click', () => {
  mainDiv.setAttribute('style', 'background-color: green');
});

redButton.addEventListener('click', () => {
  mainDiv.setAttribute('style', 'background-color: red');
});

blueButton.addEventListener('click', () => {
  mainDiv.setAttribute('style', 'background-color: blue');
});

resetButton.addEventListener('click', () => {
  mainDiv.removeAttribute('style');
});
