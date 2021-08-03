const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
})

function changeToLight() {
  document.querySelector('.clock-total').style.background = 'rgb(222 209 209)'
  document.querySelector('.brg-color-light').style.opacity = '0'
  document.querySelector('.brg-color-dark').style.opacity = '1'
  document.querySelector('.check-time').style.color = 'black'


}

function changeToDark() {
  document.querySelector('.clock-total').style.background = '#091921'
  document.querySelector('.brg-color-dark').style.opacity = 0
  document.querySelector('.brg-color-light').style.opacity = '1'
  document.querySelector('.check-time').style.color = '#fff'
}

function checkTimeCurrent() {
  alert(new Date())
}

console.log(new Date())




