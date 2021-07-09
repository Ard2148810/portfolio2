import './styles/style.sass'
import headerHtml from './header.html'
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
let contents = [headerHtml, mainHtml, footerHtml]
contents.forEach((item) => app.insertHtml(item))

let sliderContent = [
    {
        imgSrc: img,
        title: 'Tile',
        subtitle: 'Subtitle first',
    },
    {
        imgSrc: img,
        title: 'Another one',
        subtitle: 'Second subtitle',
    },
    {
        imgSrc: img,
        title: 'Even more',
        subtitle: 'Third subtitle',
    },
]

let slider = new Slider.Slider(sliderContent, 4000)
document.getElementById('sliderTarget').appendChild(slider.getSliderElem())
