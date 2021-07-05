import * as _ from 'lodash'
import './styles/style.sass'
import file from './file.html'

function component() {
    const element = document.createElement('div')
    element.classList.add('test')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    return element
}

let child = document.body.appendChild(component())
child.innerHTML = file

//console.log(file);
