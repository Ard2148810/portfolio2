import './styles/style.sass'
import headerHtml from './header.html'
import navHtml from './nav.html'
import mainHtml from './main.html'
import footerHtml from './footer.html'

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
