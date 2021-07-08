import './slider.sass'

export module Slider {
    export class Slider {
        private sliderElem: HTMLElement
        private slideContainerElem: HTMLElement
        private items: Array<SliderItem>
        private animHandle: NodeJS.Timer

        constructor(items: Array<SliderItem>, interval: number) {
            this.createSlider()
            this.setSliderItems(items)
            this.setAnimating(true, interval)
        }

        private animate(slidingTarget: HTMLElement) {
            let current = parseInt(slidingTarget.dataset.active)
            let count = slidingTarget.childElementCount
            current = (current + 1) % count // Calculate new index
            if (current === 0) {
                // Remove temporarily transition for loop effect
                slidingTarget.classList.add('notransition')
            } else {
                slidingTarget.classList.remove('notransition')
            }
            slidingTarget.dataset.active = current.toString()
            slidingTarget.style.transform = `translateX(-${current * 100}%)`
        }

        private createSlider() {
            let elem = document.createElement('div')
            elem.classList.add('slider')

            let slideContainer = document.createElement('div')
            slideContainer.classList.add('slider-container')
            slideContainer.dataset.active = '0' // Keep active item index in the slider as data attribute
            elem.appendChild(slideContainer)

            this.slideContainerElem = slideContainer
            this.sliderElem = elem
        }

        setSliderItems(items: Array<SliderItem>): HTMLElement {
            this.items = items
            items.push(items[0]) // Add first item at the end for infinite sliding loop effect
            let htmlItems = ''
            items.forEach((item) => {
                htmlItems += `
                <div class='slider-item'>
                    <div class='slider-item-img' style='background-image: url("${item.imgSrc}")'></div>
                    <div class='slider-label'>
                        <p>${item.title}</p>
                        <p class='slider-item-subtitle'>${item.subtitle}</p>
                    </div>
                </div>`
            })
            this.slideContainerElem.innerHTML = htmlItems
            return this.sliderElem
        }

        getSliderElem(): HTMLElement {
            return this.sliderElem
        }

        setAnimating(value: boolean, interval: number) {
            if (value) {
                this.animHandle = setInterval(
                    this.animate,
                    interval,
                    this.slideContainerElem
                )
            } else if (this.animHandle) {
                clearInterval(this.animHandle)
            }
        }
    }

    export interface SliderItem {
        imgSrc: string
        title: string
        subtitle: string
    }
}
