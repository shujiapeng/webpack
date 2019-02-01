import _ from 'lodash'

export default function printMe() {
  console.log('我在print.222')
  _.times(5, (num) => {
    console.log(num)
  })
}