let selectEl = document.getElementById("estados")
let submitBtn = document.getElementById("button_form")
let clearBtn = document.getElementById("button_clean")
let requiredFields = document.getElementsByClassName('required')
let radioFields = document.getElementsByClassName('required_radio')

function createEl(tag){
  let element = document.createElement(tag)
  return element
}

// Fazendo requisições em API com JSON
// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON
let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`
let request = new XMLHttpRequest();
request.open("GET", url)
request.responseType = "json"
request.send()
request.onload = function() {
 let arrObj = request.response
 setComboBox(arrObj)
}

function setComboBox(arr) {
  arr.forEach( obj => {
    let estado = obj["nome"]
    let sigla = obj["sigla"]
    let option = createEl('option')
    option.value = `${sigla}`
    option.textContent = `${estado}`
    selectEl.appendChild(option)
  })
}

function validateForm(event) {
  event.preventDefault()
  
  // Convertendo a collection em array
  let arr = [...requiredFields]
  let count = 0
  // Em cada iteração verifica se algum valor está vazio deixou e começa a contar
  arr.forEach( el => {
    if (el.value === ""){
      count += 1
    }
  })

  // Declarando os booleanos para avaliar na próxima condicional
  let dataStr = requiredFields[8].value
  let dataArr = dataStr.split('/')
  let day = parseInt(dataArr[0])
  let month = parseInt(dataArr[1])
  let year = parseInt(dataArr[2])
  let boolData = (0 < day && day < 31) && (0 < month && month < 12) && (0 < year)
  let boolRadio = radioFields[0].checked || radioFields[1].checked
  let boolCPF = parseInt(requiredFields[2].value)

  if (count === 0 && boolData && boolRadio && boolCPF ){
    alert("Tudo OK!")
  } else {
    alert("Preencha todos os campos corretamente!")
    let bool = count === 0
    console.log(boolData)
  }
}

function clearFields(event) {
  event.preventDefault()
  let arr = Array.from(requiredFields)
  arr.forEach( el => {
    el.value = ""
  })

  let arr2 = [...radioFields]
  arr2.forEach( el => {
    el.checked = false
  })
}

submitBtn.addEventListener('click', validateForm)
clearBtn.addEventListener('click', clearFields)