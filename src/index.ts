import './styles/style.sass'
import file from './file.html'

function component() {
    const element = document.createElement('div')
    element.classList.add('test')
    element.innerHTML = 'nothing is here'
    return element
}

let child = document.body.appendChild(component())
child.innerHTML = file

//console.log(file);
