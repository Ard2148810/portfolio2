import './styles/style.sass'
import headerHtml from './header.html'
import mainHtml from './main.html'
import footerHtml from './footer.html'
import { Slider } from './slider/slider'
import techTs from './img/tech-ts.png'
import techSass from './img/tech-sass.png'
import techAngular from './img/tech-angular.png'

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

    insertIcon(targetClass: string, icon: string) {
        Array.from(document.getElementsByClassName(targetClass)).forEach(
            console.log
        )
    }
}

const app = new App()
let contents = [headerHtml, mainHtml, footerHtml]
contents.forEach((item) => app.insertHtml(item))

let sliderContent = [
    {
        imgSrc: techTs,
        title: 'TypeScript',
        subtitle: 'https://www.typescriptlang.org/',
    },
    {
        imgSrc: techSass,
        title: 'Sass',
        subtitle: 'https://sass-lang.com/',
    },
    {
        imgSrc: techAngular,
        title: 'Angular',
        subtitle: 'https://angular.io/',
    },
]

let slider = new Slider.Slider(sliderContent, 4000)
document.getElementById('sliderTarget').appendChild(slider.getSliderElem())

document.getElementById('navBtn').addEventListener('click', () => {
    let nav = document.getElementById('navItemContainer')
    if (nav.classList.contains('nav-small-hidden')) {
        nav.classList.remove('nav-small-hidden')
    } else {
        nav.classList.add('nav-small-hidden')
    }
})
