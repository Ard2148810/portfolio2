import './styles/style.sass'
import headerHtml from './header.html'
import navHtml from './nav.html'
import mainHtml from './main.html'
import footerHtml from './footer.html'
import { Slider } from './slider/slider'
import img from './img/navbg.png'

class App {
    app: HTMLDivElement

    constructor() {
        document.body.classList.add('page-fill')
        const appElement = document.createElement('div')
        appElement.setAttribute('id', 'app')
        this.app = document.body.appendChild(appElement)
    }

    insertHtml(html: string) {
        this.app.innerHTML += html
    }
}

const app = new App()
let contents = [headerHtml, navHtml, mainHtml, footerHtml]
contents.forEach((item) => app.insertHtml(item))

let sliderContent = [
    {
        imgSrc: img,
        title: 'Tile',
        subtitle: '0',
    },
    {
        imgSrc: img,
        title: 'Another one',
        subtitle: '1',
    },
    {
        imgSrc: img,
        title: 'Even more',
        subtitle: '2',
    },
]
let slider = new Slider.Slider(sliderContent)
document.getElementById('sliderTarget').appendChild(slider.getSliderElem())
