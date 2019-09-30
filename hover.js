const slideshow = documentquerySelector("div.slideshow")
const images = slideshow.querySelectorAll("img")

slideshow.addEventListener("mousemove", function(event){

const y =event.offsetY
const height = this.offsetHeight

const percentage = y/height
const imageNumber = Math.floor(percentage * images.length)

images.forEach(image => {
    image.style.zIndex = 0
})

images[imageNumber].style.zIndex = 1

});

const slideshow = documentquerySelector("div.slideshow")
const images = slideshow.querySelectorAll("img")

slideshow.addEventListener("touchmove", function(event){

const x =event.offsetX
const width = this.offsetWidth

const percentage = x/width
const imageNumber = Math.floor(percentage * images.length)

images.forEach(image => {
    image.style.zIndex = 0
})

images[imageNumber].style.zIndex = 1

});