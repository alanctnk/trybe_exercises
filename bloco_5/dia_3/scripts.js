
function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    
    weekDaysList.appendChild(dayListItem);
  };
};

function createTag(tagName){
  let element = document.createElement(tagName)
  return element
}

const fridays = [4, 11, 18, 25]
function createDaysOfMonth() {
  let ulList = document.getElementById('days')
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const holidays = [24, 25, 31]
  dezDaysList.forEach(function(e, i) {

    // populando os dias da semana
    ulList.appendChild(createTag('li'))
    ulList.children[i].innerHTML = e
    ulList.children[i].classList.add('day')

    // verificando e autenticando classe holiday para os feriados
    holidays.forEach(function(e){
      if (e == ulList.children[i].innerHTML){
        ulList.children[i].classList.add('holiday')
      }
    })

    // verificando e autenticando classe friday para sextas
    fridays.forEach(function(e){
      if (e == ulList.children[i].innerHTML){
        ulList.children[i].classList.add('friday')
      }
    })
  });
}

let button = createTag('button')
function buttonHoliday(str) {
  button.innerHTML = str
  button.classList.add('btn-holiday')
  document.querySelector('.buttons-container').appendChild(button)
}
let button2 = createTag('button')
function buttonFriday(str) {
  button2.innerHTML = str
  button2.classList.add('btn-friday')
  document.querySelector('.buttons-container').appendChild(button2)
}

function changeHolidayColor() {
  let holidays = document.querySelectorAll('.holiday')
  for (let index = 0; index < holidays.length; index += 1){
    let holiday = holidays[index]
    holiday.classList.toggle("highlight")
  }
}

function changeFridayText() {
  let list = document.querySelectorAll('.friday')
  for (let index = 0; index < list.length; index += 1){  
    if (list[index].innerHTML == "SEXTOU!!!"){
      list[index].innerHTML = fridays[index]
    } else {
      list[index].innerHTML = "SEXTOU!!!"
    }
  }
}

createDaysOfTheWeek()
createDaysOfMonth()
buttonHoliday('Feriado')
button.addEventListener('click', changeHolidayColor)
buttonFriday('Sextou')
button2.addEventListener('click', changeFridayText)