import _ from 'lodash'
import printMe from './print'
import {cube} from './math'
import './style.css'

function content() {
  let element = document.createElement('div')

  let temp = ''
  _.times(5, (num) => {
    temp += num + ','
  })
  element.innerHTML = [
    'hello webpack',
    '5 cubed is equal to ' + cube(5),
    temp
  ].join('\n\n')
  element.classList.add('hello')
  
  let btn = document.createElement('button')
  btn.innerHTML = 'click me'
  btn.onclick = printMe
  element.appendChild(btn)

  console.log(process.env.NODE_ENV)

  return element
}

document.body.appendChild(content())