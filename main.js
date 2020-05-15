function createClass (name, rules) {
  var style = document.createElement('style')
  style.type = 'text/css'
  document.getElementsByTagName('head')[0].appendChild(style)
  if (!(style.sheet || {}).insertRule)
    (style.styleSheet || style.sheet).addRule(name, rules)
  else style.sheet.insertRule(name + '{' + rules + '}', 0)
}

function highlightButton (currentIndex) {
  const slideButtons = document.getElementsByClassName('slidebutton')
  for (i = 0; i < slideButtons.length; i++) {
    slideButtons[i].classList.remove('activebutton')
  }
  slideButtons[currentIndex].classList.add('activebutton')
}

;(function onLoad () {
  const slideitems = document.getElementsByClassName('slideitem')
  for (let i = 0; i < slideitems.length; i++) {
    const slide = slideitems[i]

    slide.id = `slide${i}`
    createClass(`.transform${i}`, `transform: translate(-${i * 400}px, 0px);`)

    const buttoncontainer = document.getElementById('buttoncontainer')
    const newButton = document.createElement('div')

    newButton.id = `slide${i}button`
    newButton.className = 'slidebutton'
    if (i === 0) {
      newButton.classList.add('activebutton')
    }
    newButton.addEventListener('click', function () {
      const slides = document.getElementById('slides')
      slides.classList = ''
      slides.classList.add(`transform${i}`)
      highlightButton(i)
    })

    buttoncontainer.appendChild(newButton)
  }
})()

function switchSlides () {
  const currentSlide = document.getElementsByClassName('activebutton')
  const indexValue = parseInt(currentSlide[0].id.slice(5, 6))
  const slides = document.getElementById('slides')
  const slideItems = document.getElementsByClassName('slideitem')
  let nextSlideIndex

  if (indexValue === slideItems.length - 1) {
    nextSlideIndex = 0
  } else {
    nextSlideIndex = indexValue + 1
  }

  slides.classList = ''
  slides.classList.add(`transform${nextSlideIndex}`)
  highlightButton(nextSlideIndex)
}

setInterval(switchSlides, 5000)
