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

  element.appendChild(document.createElement('br'))
  
  let btn = document.createElement('button')
  btn.innerHTML = 'click me'
  btn.onclick = printMe
  element.appendChild(btn)

  element.appendChild(document.createElement('br'))

  let btn2 = document.createElement('button')
  btn2.innerHTML = 'click me 2'

  // 懒加载的方式加载print2
  btn2.onclick = e => import('./print2').then(module => {
    let print2 = module.default
    print2()
  })
  element.appendChild(btn2)


  console.log(process.env.NODE_ENV)
  console.log(process.env.NODE_ENV)

  return element
}

document.body.appendChild(content())