window.onload = function() {

  document.getElementById('texto').style.backgroundColor = localStorage.textBackgroundColor
  document.getElementById('texto').style.color = localStorage.textColor
  document.getElementById('texto').style.fontSize = localStorage.textFontSize
  document.getElementById('texto').style.lineHeight = localStorage.textLineHeight
  document.getElementById('texto').style.fontFamily = localStorage.textFontFamily


  function addBgColor(event) {
    let bgColorValue = document.getElementById('bgColor').value    
    document.getElementById('texto').style.backgroundColor = bgColorValue
    if(event.target == document.getElementById('bgColor')) {
      event.preventDefault()
    }
  }

  function addFontColor(event) {
    let colorValue = document.getElementById('color').value    
    document.getElementById('texto').style.color = colorValue
    if(event.target == document.getElementById('color')) {
      event.preventDefault()
    }
  }

  function addFontSize(event) {
    let fontSizeValue = document.getElementById('fontSize').value    
    document.getElementById('texto').style.fontSize = `${fontSizeValue}px`
    if(event.target == document.getElementById('fontSize')) {
      event.preventDefault()
    }
  }

  function addLineHeight(event) {
    let lineHeightValue = document.getElementById('lineHeight').value    
    document.getElementById('texto').style.lineHeight = `${lineHeightValue}px`
    if(event.target == document.getElementById('lineHeight')) {
      event.preventDefault()
    }
  }

  function addFontFamily() {
    let radioList = document.getElementsByClassName('radioBox')
    for (let index = 0; index < radioList.length; index += 1){
      if(radioList[index].value){
        let radioValue = radioList[index].value
        let checked = radioList[index].checked
        if(checked){

          document.getElementById('texto').style.fontFamily = radioValue
        }
      }
    }
  }

  function addLocalStorage(){
    let backgroundColor = document.getElementById('texto').style.backgroundColor
    let color = document.getElementById('texto').style.color
    let fontSize = document.getElementById('texto').style.fontSize
    let lineHeight = document.getElementById('texto').style.lineHeight
    let fontFamily = document.getElementById('texto').style.fontFamily
    localStorage.setItem("textBackgroundColor", backgroundColor)
    localStorage.setItem("textColor", color)
    localStorage.setItem("textFontSize", fontSize)
    localStorage.setItem("textLineHeight", lineHeight)
    localStorage.setItem("textFontFamily", fontFamily)
  }

  let button = document.getElementById('formButton')
  document.addEventListener('click', addBgColor)
  document.addEventListener('click', addFontColor)
  document.addEventListener('click', addFontSize)
  document.addEventListener('click', addLineHeight)
  document.addEventListener('click', addFontFamily)
  button.addEventListener('click', addLocalStorage)
  
}