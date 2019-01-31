import printMe from './print'

function content() {
  let element = document.createElement('div')

  element.innerHTML = 'hello webpack'
  element.classList.add('hello')
  
  let btn = document.createElement('button')
  btn.innerHTML = 'click me'
  btn.onclick = printMe
  element.appendChild(btn)

  return element
}

document.body.appendChild(content())